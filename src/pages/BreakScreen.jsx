import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './BreakScreen.css'

const NSR_PROMPTS = [
  'Let your shoulders drop. You don\'t need to do anything right now.',
  'Notice your breath, without changing it.',
  'Nothing to solve here — just rest for a moment.',
  'When you\'re ready, you can head back in.',
]

function DoodlePad() {
  const canvasRef = useRef(null)
  const drawing = useRef(false)

  const getPos = (e, canvas) => {
    const rect = canvas.getBoundingClientRect()
    const point = e.touches ? e.touches[0] : e
    return { x: point.clientX - rect.left, y: point.clientY - rect.top }
  }

  const start = (e) => {
    drawing.current = true
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const { x, y } = getPos(e, canvas)
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const move = (e) => {
    if (!drawing.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const { x, y } = getPos(e, canvas)
    ctx.lineTo(x, y)
    ctx.strokeStyle = 'var(--teal-700)'
    ctx.lineWidth = 3
    ctx.lineCap = 'round'
    ctx.stroke()
  }

  const stop = () => { drawing.current = false }

  const clear = () => {
    const canvas = canvasRef.current
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
  }

  return (
    <div className="doodle-pad">
      <canvas
        ref={canvasRef}
        width={480}
        height={280}
        className="doodle-canvas"
        onMouseDown={start}
        onMouseMove={move}
        onMouseUp={stop}
        onMouseLeave={stop}
        onTouchStart={start}
        onTouchMove={move}
        onTouchEnd={stop}
      />
      <button className="btn btn-ghost" onClick={clear}>Clear</button>
    </div>
  )
}

function NonSleepRest() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step >= NSR_PROMPTS.length - 1) return
    const t = setTimeout(() => setStep((s) => s + 1), 6000)
    return () => clearTimeout(t)
  }, [step])

  return (
    <div className="nsr">
      <p className="nsr-prompt">{NSR_PROMPTS[step]}</p>
      <div className="nsr-dots">
        {NSR_PROMPTS.map((_, i) => (
          <span key={i} className={`nsr-dot ${i <= step ? 'is-active' : ''}`} />
        ))}
      </div>
    </div>
  )
}

export default function BreakScreen() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [tab, setTab] = useState('doodle')
  const [awayNudge, setAwayNudge] = useState(false)

  const { durationMin = 0, targetMin = 0, distractions = 0 } = state || {}

  useEffect(() => {
    const onVisibilityChange = () => {
      if (!document.hidden) return
      setAwayNudge(true)
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [])

  return (
    <div className="break-wrap">
      <p className="break-eyebrow">Break time</p>
      <h1 className="break-title">
        You stayed focused for {durationMin} of {targetMin || durationMin} minutes.
      </h1>
      <p className="break-receipt">
        You got distracted {distractions} time{distractions === 1 ? '' : 's'}. That's just information — not a score.
      </p>

      {awayNudge && (
        <p className="break-nudge">
          Welcome back — this is your break, so there's no rush either way.
        </p>
      )}

      <div className="break-tabs">
        <button className={`break-tab ${tab === 'doodle' ? 'is-active' : ''}`} onClick={() => setTab('doodle')}>Doodle</button>
        <button className={`break-tab ${tab === 'nsr' ? 'is-active' : ''}`} onClick={() => setTab('nsr')}>Rest (NSR)</button>
      </div>

      {tab === 'doodle' ? <DoodlePad /> : <NonSleepRest />}

      <button className="btn btn-primary break-continue-btn" onClick={() => navigate('/focus')}>
        Start next session
      </button>
    </div>
  )
}
