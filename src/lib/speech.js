// Shared text-to-speech helper. Always user-triggered, never autoplay.
//
// getVoices() returns an empty array on the very first call in Chrome/Edge —
// the voice list loads asynchronously — so callers who pick a voice
// immediately silently get the browser default. loadVoices() waits for the
// real list (via 'voiceschanged', with a timeout fallback for browsers that
// never fire it) before any voice is selected.

let voicesReadyPromise = null

function loadVoices() {
  if (voicesReadyPromise) return voicesReadyPromise
  voicesReadyPromise = new Promise((resolve) => {
    if (!('speechSynthesis' in window)) { resolve([]); return }
    const existing = window.speechSynthesis.getVoices()
    if (existing.length > 0) { resolve(existing); return }
    const onVoicesChanged = () => {
      window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged)
      resolve(window.speechSynthesis.getVoices())
    }
    window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged)
    setTimeout(() => resolve(window.speechSynthesis.getVoices()), 500)
  })
  return voicesReadyPromise
}

export async function speak(text, { pitch = 1, rate = 1, voiceMatch, onBoundary } = {}) {
  if (!('speechSynthesis' in window) || !text) return
  window.speechSynthesis.cancel()
  const voices = await loadVoices()
  const utter = new SpeechSynthesisUtterance(text)
  const preferred = voiceMatch ? voices.find(voiceMatch) : null
  if (preferred) utter.voice = preferred
  utter.pitch = pitch
  utter.rate = rate
  if (onBoundary) utter.onboundary = onBoundary

  return new Promise((resolve) => {
    utter.onend = resolve
    utter.onerror = resolve
    window.speechSynthesis.speak(utter)
  })
}

// The "Jarvis" read-aloud feel shared by Study Plan and the Jarvis
// section — lower pitch, slightly slower rate, prefers a male English voice.
export function speakAsJarvis(text, opts = {}) {
  return speak(text, {
    pitch: 0.8,
    rate: 0.93,
    voiceMatch: (v) => /male|daniel|david|james/i.test(v.name) && v.lang.startsWith('en'),
    ...opts,
  })
}
