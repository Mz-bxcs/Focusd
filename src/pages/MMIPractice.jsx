import { useState, useRef } from 'react'
import { useUser } from '../context/UserContext'
import { useGeminiCall } from '../lib/gemini'
import PremiumUpsell from '../components/PremiumUpsell'
import './StudyPlan.css'
import './MMIPractice.css'

const SpeechRecognitionClass = typeof window !== 'undefined'
  ? (window.SpeechRecognition || window.webkitSpeechRecognition)
  : null

export default function MMIPractice() {
  const { user } = useUser()
  const { loading, error, result, run } = useGeminiCall()
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const recognitionRef = useRef(null)

  const generate = () => {
    run(`Generate exactly 3 MMI (Multiple Mini Interview) style ethical/scenario interview questions for a UK medicine or dentistry applicant.
Number them 1-3. Keep each question realistic and specific (e.g. a scenario involving patient confidentiality, resource allocation, or professionalism), not generic.
Do not answer them — just the 3 questions.`)
  }

  const toggleListening = () => {
    if (!SpeechRecognitionClass) return
    if (listening) {
      recognitionRef.current?.stop()
      setListening(false)
      return
    }
    const recognition = new SpeechRecognitionClass()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.onresult = (e) => {
      const text = Array.from(e.results).map((r) => r[0].transcript).join(' ')
      setTranscript(text)
    }
    recognition.onend = () => setListening(false)
    recognition.start()
    recognitionRef.current = recognition
    setListening(true)
  }

  if (!user.subscribed) {
    return <PremiumUpsell feature="MMI practice" />
  }

  return (
    <div className="plan-wrap">
      <p className="plan-eyebrow">MMI Practice</p>
      <h1 className="plan-title">Practice thinking on your feet.</h1>
      <p className="plan-sub">Generate 3 interview-style questions, then practice answering out loud.</p>

      <button className="btn btn-primary plan-generate-btn" onClick={generate} disabled={loading}>
        {loading ? 'Thinking…' : 'Generate 3 questions'}
      </button>

      {error && <p className="plan-error">{error}</p>}

      {result && (
        <div className="plan-result">
          <h2 className="plan-result-title">Your questions</h2>
          <p className="plan-result-text">{result}</p>
        </div>
      )}

      {result && SpeechRecognitionClass && (
        <div className="mmi-answer">
          <h2 className="plan-result-title">Answer out loud</h2>
          <button className="btn btn-ghost" onClick={toggleListening}>
            {listening ? '⏹ Stop' : '🎙 Start answering'}
          </button>
          {transcript && <p className="mmi-transcript">{transcript}</p>}
        </div>
      )}
    </div>
  )
}
