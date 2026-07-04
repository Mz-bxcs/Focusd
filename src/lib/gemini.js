import { useState, useCallback } from 'react'

// Client-side call, no backend — the API key is visible in the browser's
// network tab. Fine for a private demo link, not for a public production app.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const MODEL = 'gemini-2.5-flash'
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`

const RETRYABLE_STATUSES = new Set([429, 503])
const MAX_ATTEMPTS = 3

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function askGemini(prompt, systemInstruction) {
  if (!API_KEY) {
    throw new Error('Missing VITE_GEMINI_API_KEY — add it to .env (see .env.example) and restart the dev server.')
  }

  const body = { contents: [{ parts: [{ text: prompt }] }] }
  if (systemInstruction) {
    body.systemInstruction = { parts: [{ text: systemInstruction }] }
  }

  let lastError
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const res = await fetch(`${ENDPOINT}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (res.ok) {
      const data = await res.json()
      return data.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') ?? ''
    }
    const errText = await res.text().catch(() => '')
    lastError = new Error(`Gemini request failed (${res.status}): ${errText.slice(0, 200)}`)
    // Gemini's free tier occasionally returns 503 "high demand" or 429 rate-limit
    // errors that clear up within a couple seconds — worth a couple of retries
    // before surfacing an error to the student.
    if (!RETRYABLE_STATUSES.has(res.status) || attempt === MAX_ATTEMPTS) break
    await wait(1500 * attempt)
  }
  throw lastError
}

// Shared loading/error/result state for the three Gemini-backed pages.
export function useGeminiCall() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)

  const run = useCallback(async (prompt) => {
    setLoading(true)
    setError(null)
    try {
      const text = await askGemini(prompt)
      setResult(text)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, error, result, run }
}
