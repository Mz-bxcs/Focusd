import { useEffect, useRef, useState } from 'react'
import './NSDR.css'

const SCRIPT = [
  { text: "Find a comfortable position, sitting or lying down. You don't need to do anything except listen.", seconds: 8 },
  { text: 'Let your eyes close, or soften your gaze downward.', seconds: 6 },
  { text: 'Take one slow breath in through your nose, and let it out slowly through your mouth.', seconds: 8 },
  { text: "Notice the weight of your body against the chair or floor. There's nowhere else to be right now.", seconds: 8 },
  { text: 'Bring your attention to your feet. Just notice them, without changing anything.', seconds: 8 },
  { text: 'Let that attention rise slowly — ankles, calves, knees — noticing without judging.', seconds: 10 },
  { text: 'Continue up through your hips, your stomach, your chest — each breath a little slower than the last.', seconds: 10 },
  { text: 'Notice your shoulders. Let them drop, even slightly, away from your ears.', seconds: 8 },
  { text: 'Relax your jaw, your eyes, your forehead.', seconds: 8 },
  { text: "Rest here for a moment. There's nothing to solve, nowhere to be.", seconds: 12 },
  { text: 'When you’re ready, take one more full breath — in, and out.', seconds: 8 },
  { text: 'Gently bring your awareness back to the room. Open your eyes when you’re ready.', seconds: 6 },
]

const TOTAL_SECONDS = SCRIPT.reduce((sum, s) => sum + s.seconds, 0)

function speak(text) {
  return new Promise((resolve) => {
    if (!window.speechSynthesis) { resolve(); return }
    const utter = new SpeechSynthesisUtterance(text)
    utter.rate = 0.85
    utter.pitch = 0.95
    utter.onend = resolve
    utter.onerror = resolve
    speechSynthesis.speak(utter)
  })
}

export default function NSDR({ isOpen, onClose }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [running, setRunning] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      setRunning(false)
      setStepIndex(0)
      window.speechSynthesis?.cancel()
      clearTimeout(timeoutRef.current)
    }
  }, [isOpen])

  useEffect(() => {
    if (!running || !isOpen) return
    if (stepIndex >= SCRIPT.length) { setRunning(false); return }
    let cancelled = false
    speak(SCRIPT[stepIndex].text).then(() => {
      if (cancelled) return
      timeoutRef.current = setTimeout(() => {
        if (!cancelled) setStepIndex((i) => i + 1)
      }, SCRIPT[stepIndex].seconds * 1000)
    })
    return () => {
      cancelled = true
      clearTimeout(timeoutRef.current)
      window.speechSynthesis?.cancel()
    }
  }, [running, stepIndex, isOpen])

  if (!isOpen) return null

  const isComplete = stepIndex >= SCRIPT.length
  const elapsedSeconds = SCRIPT.slice(0, stepIndex).reduce((sum, s) => sum + s.seconds, 0)
  const progressPct = Math.min(100, (elapsedSeconds / TOTAL_SECONDS) * 100)

  const start = () => setRunning(true)
  const pause = () => { setRunning(false); window.speechSynthesis?.cancel() }
  const finish = () => { setRunning(false); window.speechSynthesis?.cancel(); onClose() }

  return (
    <div className="nsdr-overlay" role="dialog" aria-modal="true">
      <div className="nsdr-container">
        <h2>NSDR</h2>
        <p className="nsdr-instruction">Non-sleep deep rest — a short guided wind-down. Headphones help.</p>

        <div className="nsdr-track">
          <div className="nsdr-fill" style={{ width: `${progressPct}%` }} />
        </div>

        <p className="nsdr-line">
          {isComplete
            ? 'That’s the session — however you feel now is fine.'
            : running
              ? SCRIPT[stepIndex].text
              : 'Ready when you are.'}
        </p>

        <div className="nsdr-controls">
          {!running && !isComplete && stepIndex === 0 && (
            <button className="btn btn-primary" onClick={start}>Begin</button>
          )}
          {running && <button className="btn btn-ghost" onClick={pause}>Pause</button>}
          {!running && stepIndex > 0 && !isComplete && (
            <button className="btn btn-primary" onClick={start}>Resume</button>
          )}
          <button className="btn btn-ghost" onClick={finish}>{isComplete ? 'Done' : 'Exit'}</button>
        </div>
      </div>
    </div>
  )
}
