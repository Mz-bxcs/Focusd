import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useStudy } from '../context/StudyContext'
import BoxBreathing from '../components/BoxBreathing'
import './FocusSession.css'

const PRESETS = [15, 25, 45, 90]

export default function FocusSession() {
  const { logFocusMinutes, logSession } = useStudy()
  const navigate = useNavigate()
  const location = useLocation()
  const [target, setTarget] = useState(location.state?.target || 90)
  const [customOpen, setCustomOpen] = useState(false)
  const [running, setRunning] = useState(false)
  const [elapsedSec, setElapsedSec] = useState(0)
  const [reachedTarget, setReachedTarget] = useState(false)
  const [distractions, setDistractions] = useState(0)
  const [showBreathing, setShowBreathing] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    // Coming from the Hub's duration picker: skip straight to a running session.
    if (location.state?.autoStart) {
      setElapsedSec(0)
      setReachedTarget(false)
      setDistractions(0)
      setRunning(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setElapsedSec((s) => s + 1)
      }, 1000)
    }
    return () => clearInterval(intervalRef.current)
  }, [running])

  // Focus Lock: a proof-of-concept distraction count via tab visibility —
  // not real OS-level app blocking, just an honest signal for the receipt.
  useEffect(() => {
    if (!running) return
    const onVisibilityChange = () => {
      if (document.hidden) setDistractions((d) => d + 1)
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [running])

  useEffect(() => {
    if (elapsedSec >= target * 60 && !reachedTarget) {
      setReachedTarget(true)
    }
  }, [elapsedSec, target, reachedTarget])

  const minutes = Math.floor(elapsedSec / 60)
  const seconds = elapsedSec % 60
  const progressPct = Math.min(100, (elapsedSec / (target * 60)) * 100)

  const start = () => {
    setElapsedSec(0)
    setReachedTarget(false)
    setDistractions(0)
    setRunning(true)
  }

  const end = () => {
    setRunning(false)
    const loggedMinutes = Math.max(1, minutes)
    if (minutes > 0 || seconds > 10) {
      logFocusMinutes(loggedMinutes)
      logSession({ durationMin: loggedMinutes, distractions })
    }
    navigate('/break', { state: { durationMin: loggedMinutes, targetMin: target, distractions } })
  }

  if (!running) {
    return (
      <div className="focus-wrap">
        <h1 className="focus-title">How long, roughly?</h1>
        <p className="focus-sub">90 minutes matches your body's natural focus rhythm — but you can stop early any time.</p>
        <div className="focus-presets">
          {PRESETS.map((p) => (
            <button
              key={p}
              className={`focus-preset ${target === p && !customOpen ? 'is-active' : ''}`}
              onClick={() => { setTarget(p); setCustomOpen(false) }}
            >
              {p} min
            </button>
          ))}
          <button
            className={`focus-preset ${customOpen ? 'is-active' : ''}`}
            onClick={() => setCustomOpen(true)}
          >
            Custom
          </button>
        </div>
        {customOpen && (
          <div className="focus-custom">
            <input
              type="range"
              min={2}
              max={90}
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
            />
            <span className="focus-custom-val">{target} min</span>
          </div>
        )}
        <button className="btn btn-primary focus-start-btn" onClick={start}>Begin</button>
      </div>
    )
  }

  return (
    <div className="focus-wrap focus-wrap--running">
      <div className="focus-ring-wrap">
        <svg viewBox="0 0 200 200" className="focus-ring">
          <circle cx="100" cy="100" r="88" className="focus-ring-track" />
          <circle
            cx="100" cy="100" r="88"
            className="focus-ring-fill"
            style={{
              strokeDasharray: 2 * Math.PI * 88,
              strokeDashoffset: 2 * Math.PI * 88 * (1 - progressPct / 100),
            }}
          />
        </svg>
        <div className="focus-ring-time">
          <span className="focus-ring-time-num">{minutes}:{String(seconds).padStart(2, '0')}</span>
          <span className="focus-ring-time-label">of {target} min</span>
        </div>
      </div>

      {reachedTarget && (
        <p className="focus-nudge">
          You've hit your target. Keep going if it's flowing, or wrap up — both are a good outcome.
        </p>
      )}

      <div className="focus-running-actions">
        <button className="btn btn-ghost" onClick={() => setShowBreathing(true)}>Reset with Box Breathing</button>
        <button className="btn btn-ghost focus-end-btn" onClick={end}>End session</button>
      </div>

      <BoxBreathing isOpen={showBreathing} onClose={() => setShowBreathing(false)} />
    </div>
  )
}
