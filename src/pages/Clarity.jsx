import { useState } from 'react'
import { useStudy } from '../context/StudyContext'
import BoxBreathing from '../components/BoxBreathing'
import AmbientSounds from '../components/AmbientSounds'
import NSDR from '../components/NSDR'
import MoodChecker from '../components/MoodChecker'
import './Clarity.css'

const MOOD_EMOJI = { 1: '😫', 2: '😕', 3: '😐', 4: '🙂', 5: '😊' }

export default function Clarity() {
  const { moodLog, recordMood } = useStudy()
  const [showBreathing, setShowBreathing] = useState(false)
  const [showAmbient, setShowAmbient] = useState(false)
  const [showNsdr, setShowNsdr] = useState(false)
  const [showMoodCheck, setShowMoodCheck] = useState(false)

  const recentMoods = moodLog.slice(-8).reverse()

  return (
    <div className="clarity-wrap">
      <p className="clarity-eyebrow">Clarity</p>
      <h1 className="clarity-title">Clear your head before the next step.</h1>
      <p className="clarity-sub">Reset between sessions, or whenever you need a minute — no need to wait for a break screen.</p>

      <div className="clarity-tile-grid">
        <button className="clarity-tile" onClick={() => setShowBreathing(true)}>
          <span className="clarity-tile-icon" aria-hidden="true">🌬️</span>
          <span className="clarity-tile-title">Box</span>
          <span className="clarity-tile-detail">4 seconds in, hold, out, hold — 4 cycles to reset.</span>
        </button>
        <button className="clarity-tile" onClick={() => setShowAmbient(true)}>
          <span className="clarity-tile-icon" aria-hidden="true">🌧️</span>
          <span className="clarity-tile-title">Ambient sounds</span>
          <span className="clarity-tile-detail">Rain, white noise, deep rumble, or wind while you work.</span>
        </button>
        <button className="clarity-tile" onClick={() => setShowNsdr(true)}>
          <span className="clarity-tile-icon" aria-hidden="true">🌙</span>
          <span className="clarity-tile-title">NSDR</span>
          <span className="clarity-tile-detail">A short guided non-sleep deep rest wind-down.</span>
        </button>
        <button className="clarity-tile" onClick={() => setShowMoodCheck(true)}>
          <span className="clarity-tile-icon" aria-hidden="true">💬</span>
          <span className="clarity-tile-title">Check in</span>
          <span className="clarity-tile-detail">A quick, no-pressure mood log.</span>
        </button>
      </div>

      {recentMoods.length > 0 && (
        <>
          <h2 className="clarity-section-title">Recent check-ins</h2>
          <div className="clarity-mood-history">
            {recentMoods.map((entry, i) => (
              <span key={i} className="clarity-mood-chip" title={new Date(entry.date).toLocaleString()}>
                {MOOD_EMOJI[entry.mood]}
              </span>
            ))}
          </div>
        </>
      )}

      <BoxBreathing isOpen={showBreathing} onClose={() => setShowBreathing(false)} />
      <AmbientSounds isOpen={showAmbient} onClose={() => setShowAmbient(false)} />
      <NSDR isOpen={showNsdr} onClose={() => setShowNsdr(false)} />
      <MoodChecker
        isOpen={showMoodCheck}
        onClose={() => setShowMoodCheck(false)}
        type="checkin"
        onMoodRecorded={(type, mood) => recordMood(type, mood)}
      />
    </div>
  )
}
