import { useState } from 'react'
import './MoodChecker.css'

const MOODS = [
  { value: 1, emoji: '😫', label: 'Terrible' },
  { value: 2, emoji: '😕', label: 'Poor' },
  { value: 3, emoji: '😐', label: 'Okay' },
  { value: 4, emoji: '🙂', label: 'Good' },
  { value: 5, emoji: '😊', label: 'Great' },
]

const SUBTITLES = {
  before: 'Before you start',
  after: 'After your session',
  hourly: 'Just a quick check-in',
  checkin: 'How are you doing right now?',
}

export default function MoodChecker({ isOpen, onClose, type = 'before', onMoodRecorded }) {
  const [selectedMood, setSelectedMood] = useState(null)

  const handleSubmit = () => {
    if (selectedMood !== null) {
      onMoodRecorded(type, selectedMood)
      setSelectedMood(null)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="mood-checker-overlay">
      <div className="mood-checker-container">
        <h2>How are you feeling?</h2>
        <p className="mood-checker-subtitle">{SUBTITLES[type] || SUBTITLES.before}</p>

        <div className="mood-options">
          {MOODS.map((mood) => (
            <button
              key={mood.value}
              className={`mood-button ${selectedMood === mood.value ? 'selected' : ''}`}
              onClick={() => setSelectedMood(mood.value)}
              title={mood.label}
            >
              <span className="mood-emoji">{mood.emoji}</span>
              <span className="mood-label">{mood.label}</span>
            </button>
          ))}
        </div>

        <div className="mood-actions">
          <button className="btn btn-ghost" onClick={onClose}>Skip</button>
          <button className="btn btn-primary" onClick={handleSubmit} disabled={selectedMood === null}>
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
