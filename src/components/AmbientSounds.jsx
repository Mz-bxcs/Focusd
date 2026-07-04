import { useEffect, useRef, useState } from 'react'
import { SOUND_DEFS, createSoundHandle } from '../lib/ambientSounds'
import './AmbientSounds.css'

export default function AmbientSounds({ isOpen, onClose }) {
  const [activeKey, setActiveKey] = useState(null)
  const [volume, setVolume] = useState(0.5)
  const handleRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      handleRef.current?.stop()
      handleRef.current = null
      setActiveKey(null)
    }
  }, [isOpen])

  useEffect(() => () => handleRef.current?.stop(), [])

  const toggle = (key) => {
    if (activeKey === key) {
      handleRef.current?.stop()
      handleRef.current = null
      setActiveKey(null)
      return
    }
    handleRef.current?.stop()
    handleRef.current = createSoundHandle(key, volume)
    setActiveKey(key)
  }

  const handleVolume = (e) => {
    const v = Number(e.target.value)
    setVolume(v)
    handleRef.current?.setVolume(v)
  }

  if (!isOpen) return null

  return (
    <div className="ambient-overlay" role="dialog" aria-modal="true">
      <div className="ambient-container">
        <h2>Ambient sounds</h2>
        <p className="ambient-instruction">Layer a steady background sound under your focus session.</p>

        <div className="ambient-list">
          {SOUND_DEFS.map((s) => (
            <button
              key={s.key}
              className={`ambient-item ${activeKey === s.key ? 'is-active' : ''}`}
              onClick={() => toggle(s.key)}
            >
              <span className="ambient-item-icon" aria-hidden="true">{s.icon}</span>
              <span className="ambient-item-label">{s.label}</span>
              <span className="ambient-item-state">{activeKey === s.key ? 'Playing' : 'Play'}</span>
            </button>
          ))}
        </div>

        {activeKey && (
          <div className="ambient-volume">
            <label htmlFor="ambient-vol">Volume</label>
            <input
              id="ambient-vol"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolume}
            />
          </div>
        )}

        <button className="btn btn-primary ambient-done-btn" onClick={onClose}>Done</button>
      </div>
    </div>
  )
}
