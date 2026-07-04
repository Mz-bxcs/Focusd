import { useState, useEffect, useRef, useCallback } from 'react'
import { useAccessibility } from '../context/AccessibilityContext'
import './SensoryDial.css'

// Knob rotates across a 120° arc: level 1 → -60°, level 5 → +60°
const angleFor = (level) => -60 + (level - 1) * 30

export default function SensoryDial({ compact = false }) {
  const { settings, setStim, STIM_LABELS } = useAccessibility()

  // The knob/label track this local value on every drag pixel (cheap,
  // local re-render only). The expensive part — writing to context,
  // which sets 3 DOM attributes and re-triggers the full-page
  // `filter: saturate()` repaint — is debounced so it fires once
  // shortly after the user stops dragging, not dozens of times mid-drag.
  const [localLevel, setLocalLevel] = useState(settings.stim)
  const commitTimer = useRef(null)

  useEffect(() => setLocalLevel(settings.stim), [settings.stim])
  useEffect(() => () => clearTimeout(commitTimer.current), [])

  const handleChange = useCallback((e) => {
    const next = Number(e.target.value)
    setLocalLevel(next)
    clearTimeout(commitTimer.current)
    commitTimer.current = setTimeout(() => setStim(next), 80)
  }, [setStim])

  const commitNow = useCallback(() => {
    clearTimeout(commitTimer.current)
    setStim(localLevel)
  }, [setStim, localLevel])

  const level = localLevel
  const label = STIM_LABELS[level]

  return (
    <div className={`dial-widget ${compact ? 'dial-widget--compact' : ''}`}>
      <div className="dial-knob-wrap">
        <svg viewBox="0 0 120 120" className="dial-face" aria-hidden="true">
          <circle cx="60" cy="60" r="52" className="dial-ring" />
          {[1, 2, 3, 4, 5].map((lvl) => {
            const a = (angleFor(lvl) - 90) * (Math.PI / 180)
            const x1 = 60 + 44 * Math.cos(a)
            const y1 = 60 + 44 * Math.sin(a)
            const x2 = 60 + 52 * Math.cos(a)
            const y2 = 60 + 52 * Math.sin(a)
            return (
              <line
                key={lvl}
                x1={x1} y1={y1} x2={x2} y2={y2}
                className={`dial-tick ${lvl <= level ? 'dial-tick--on' : ''}`}
              />
            )
          })}
          <g style={{ transform: `rotate(${angleFor(level)}deg)`, transformOrigin: '60px 60px', transition: 'transform var(--motion-duration) ease' }}>
            <line x1="60" y1="60" x2="60" y2="26" className="dial-pointer" />
          </g>
          <circle cx="60" cy="60" r="16" className="dial-hub" />
        </svg>
        <input
          type="range"
          min={1}
          max={5}
          step={1}
          value={level}
          onChange={handleChange}
          onMouseUp={commitNow}
          onTouchEnd={commitNow}
          onKeyUp={commitNow}
          className="dial-range"
          aria-label="Sensory dial — how much stimulation the interface shows"
          aria-valuetext={`${label.name}: ${label.blurb}`}
        />
      </div>
      <div className="dial-readout">
        <span className="dial-readout-name">{label.name}</span>
        {!compact && <span className="dial-readout-blurb">{label.blurb}</span>}
      </div>
    </div>
  )
}
