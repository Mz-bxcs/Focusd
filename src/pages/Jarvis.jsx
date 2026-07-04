import { useEffect, useRef, useState } from 'react'
import { useUser } from '../context/UserContext'
import { askGemini } from '../lib/gemini'
import { speakAsJarvis } from '../lib/speech'
import PremiumUpsell from '../components/PremiumUpsell'
import './Jarvis.css'

const SpeechRecognitionClass = typeof window !== 'undefined'
  ? (window.SpeechRecognition || window.webkitSpeechRecognition)
  : null

const SYSTEM_PROMPT = "You are Jarvis, a concise study assistant for UCAT and medical/dental applicants. Give short, direct, exam-focused answers in plain language. No preamble, no filler. Keep answers under 3 sentences unless asked for more detail. Be supportive but efficient. If asked about breaks, suggest box breathing, a short rest, or the 20-20-20 eye rule."

const pulseRings = () => {
  document.querySelectorAll('.jarvis-ring').forEach((ring) => {
    ring.classList.add('pulse')
    setTimeout(() => ring.classList.remove('pulse'), 120)
  })
}

export default function Jarvis() {
  const { user } = useUser()
  const [state, setState] = useState('idle')
  const [response, setResponse] = useState('')
  const [input, setInput] = useState('')
  const [listening, setListening] = useState(false)
  const recognitionRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => () => recognitionRef.current?.stop(), [])

  const toggleListening = () => {
    if (!SpeechRecognitionClass || state !== 'idle') return
    if (listening) {
      recognitionRef.current?.stop()
      return
    }
    const recognition = new SpeechRecognitionClass()
    recognition.interimResults = true
    recognition.onresult = (e) => {
      const text = Array.from(e.results).map((r) => r[0].transcript).join(' ')
      setInput(text)
      if (e.results[e.results.length - 1].isFinal) {
        recognition.stop()
        formRef.current?.requestSubmit()
      }
    }
    recognition.onend = () => setListening(false)
    recognition.onerror = () => setListening(false)
    recognition.start()
    recognitionRef.current = recognition
    setListening(true)
  }

  const speak = async (text) => {
    setState('speaking')
    await speakAsJarvis(text, { onBoundary: pulseRings })
    setState('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || state !== 'idle') return
    setInput('')
    setState('thinking')
    setResponse('')

    let reply
    try {
      reply = await askGemini(`${user.firstName ? `(the student's name is ${user.firstName}) ` : ''}${text}`, SYSTEM_PROMPT)
    } catch (err) {
      // Surface config errors (e.g. missing API key) instead of masking them
      // behind a generic message — they need a fix, not a retry.
      reply = err.message?.startsWith('Missing VITE_GEMINI_API_KEY')
        ? err.message
        : 'Connection lost. Try again.'
    }

    setResponse(reply)
    await speak(reply)
  }

  if (!user.subscribed) {
    return <PremiumUpsell feature="focusd Jarvis" />
  }

  return (
    <div className="jarvis-page">
      <div className={`jarvis-orb ${state}`}>
        <svg viewBox="0 0 200 200">
          <circle className="jarvis-ring" cx="100" cy="100" r="90" />
          <circle className="jarvis-ring" cx="100" cy="100" r="70" />
          <circle className="jarvis-ring" cx="100" cy="100" r="50" />
          <circle className="jarvis-core" cx="100" cy="100" r="30" />
        </svg>
        <span className="jarvis-status">
          {state === 'idle' ? 'READY' : state === 'thinking' ? 'THINKING...' : 'SPEAKING'}
        </span>
      </div>

      {response && <p className="jarvis-response">{response}</p>}

      <form className="jarvis-input" onSubmit={handleSubmit} ref={formRef}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={listening ? 'Listening...' : 'Ask Jarvis...'}
          disabled={state !== 'idle'}
          autoComplete="off"
        />
        {SpeechRecognitionClass && (
          <button
            type="button"
            className={listening ? 'is-listening' : ''}
            onClick={toggleListening}
            disabled={state !== 'idle'}
            aria-label={listening ? 'Stop listening' : 'Ask by voice'}
          >
            🎤
          </button>
        )}
        <button type="submit" disabled={state !== 'idle'}>&#9654;</button>
      </form>
    </div>
  )
}
