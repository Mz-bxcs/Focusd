import { useState } from 'react'
import { useUser } from '../context/UserContext'
import { useStudy } from '../context/StudyContext'
import { useGeminiCall } from '../lib/gemini'
import { speakAsJarvis } from '../lib/speech'
import PremiumUpsell from '../components/PremiumUpsell'
import './StudyPlan.css'

const LEARNING_STYLE_LABEL = {
  visual: 'visual (diagrams, images)',
  reading: 'reading and writing',
  verbal: 'verbal / audio explanations',
  active: 'hands-on active recall',
}

export default function StudyPlan() {
  const { user } = useUser()
  const { progress } = useStudy()
  const { loading, error, result, run } = useGeminiCall()

  const [subject, setSubject] = useState('')
  const [examBoard, setExamBoard] = useState('')
  const [topic, setTopic] = useState('')
  const [minutes, setMinutes] = useState(90)

  const recentSessions = progress.sessions.slice(-5)
  const avgDistractions = recentSessions.length
    ? (recentSessions.reduce((sum, s) => sum + s.distractions, 0) / recentSessions.length).toFixed(1)
    : null

  const generate = () => {
    const learningStyle = LEARNING_STYLE_LABEL[user.learningStyle] || 'a mix of methods'
    let prompt = `Create a structured ${minutes}-minute study plan for a sixth form student preparing for medicine/dentistry applications, including the UCAT.
Subject or UCAT section: ${subject || 'not specified'}.
${examBoard ? `Exam board: ${examBoard}.` : ''}
Topic: ${topic || 'general revision'}.
The student learns best through ${learningStyle} — bias the plan's activities toward that.
Break the plan into clearly time-boxed chunks (e.g. "0-20 min: ..."), and keep the tone calm and encouraging, not high-pressure.`
    if (avgDistractions !== null) {
      prompt += `\nThis student has averaged ${avgDistractions} self-reported distractions per recent focus session — if that number is high, build in more frequent short breaks; if low, longer blocks are fine.`
    }
    run(prompt)
  }

  if (!user.subscribed) {
    return <PremiumUpsell feature="Gemini study plans" />
  }

  return (
    <div className="plan-wrap">
      <p className="plan-eyebrow">Study Plan</p>
      <h1 className="plan-title">A plan tailored to how you learn.</h1>

      <div className="plan-form">
        <label className="plan-label" htmlFor="subject">Subject or UCAT section</label>
        <input id="subject" className="plan-input" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="e.g. Biology, or Decision Making" />

        <label className="plan-label" htmlFor="examBoard">Exam board (optional)</label>
        <input id="examBoard" className="plan-input" value={examBoard} onChange={(e) => setExamBoard(e.target.value)} placeholder="e.g. AQA" />

        <label className="plan-label" htmlFor="topic">Topic</label>
        <input id="topic" className="plan-input" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Cell transport" />

        <label className="plan-label" htmlFor="minutes">Time available: {minutes} min</label>
        <input id="minutes" type="range" min={20} max={180} step={10} value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} />

        <button className="btn btn-primary plan-generate-btn" onClick={generate} disabled={loading}>
          {loading ? 'Thinking…' : 'Generate plan'}
        </button>
      </div>

      {error && <p className="plan-error">{error}</p>}

      {result && (
        <div className="plan-result">
          <div className="plan-result-head">
            <h2 className="plan-result-title">Your plan</h2>
            <button className="btn btn-ghost" onClick={() => speakAsJarvis(result)}>🔊 Read aloud</button>
          </div>
          <p className="plan-result-text">{result}</p>
        </div>
      )}
    </div>
  )
}
