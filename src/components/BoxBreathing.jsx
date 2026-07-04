import { useState, useEffect } from 'react'
import './BoxBreathing.css'

export default function BoxBreathing({ isOpen, onClose }) {
  const [phase, setPhase] = useState('inhale')
  const [secondsRemaining, setSecondsRemaining] = useState(4)
  const [cycleCount, setCycleCount] = useState(0)
  const [isActive, setIsActive] = useState(true)

  const phases = ['inhale', 'hold', 'exhale', 'hold']
  const phaseLabels = {
    inhale: 'Breathe In',
    exhale: 'Breathe Out',
    hold: 'Hold',
  }

  useEffect(() => {
    if (!isActive || !isOpen) return

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev > 1) return prev - 1

        const currentPhaseIndex = phases.indexOf(phase)
        const nextPhaseIndex = (currentPhaseIndex + 1) % phases.length
        const nextPhase = phases[nextPhaseIndex]
        setPhase(nextPhase)

        if (nextPhaseIndex === 0) {
          setCycleCount((c) => c + 1)
        }

        return 4
      })
    }, 1000)

    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, isOpen, phase])

  const handleComplete = () => {
    setIsActive(false)
    setTimeout(() => onClose(), 500)
  }

  if (!isOpen) return null

  const isComplete = cycleCount >= 4

  return (
    <div className="box-breathing-overlay">
      <div className="box-breathing-container">
        <h2>Box Breathing</h2>
        <p className="box-breathing-instruction">Restore calm and reset your focus</p>

        <div className="box-breathing-visual">
          <div
            className={`breathing-circle breathing-${phase}`}
            style={{ animationPlayState: isActive ? 'running' : 'paused' }}
          >
            <div className="circle-inner">
              <p className="phase-label">{phaseLabels[phase]}</p>
              <p className="seconds-display">{secondsRemaining}</p>
            </div>
          </div>
        </div>

        <div className="cycle-counter">Cycle {cycleCount + 1} / 4</div>

        <div className="breathing-controls">
          <button className="btn btn-ghost" onClick={() => setIsActive(!isActive)}>
            {isActive ? 'Pause' : 'Resume'}
          </button>
          <button className="btn btn-primary" onClick={handleComplete}>
            {isComplete ? 'Done' : 'Skip'}
          </button>
        </div>
      </div>
    </div>
  )
}
