import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { decks } from '../data/decks'
import { useStudy } from '../context/StudyContext'
import { useUser } from '../context/UserContext'
import './Hub.css'

const DURATIONS = [15, 25, 45, 90]

const TILES = [
  { to: '/blurt', title: 'Blurt', detail: 'Write everything you know before you study it.' },
  { to: '/ucat', title: 'Learn', detail: 'VR, DM, QR, AR, and SJT practice.' },
  { to: '/study-plan', title: 'Study Plan', detail: 'A tailored plan, read aloud if you want.' },
  { to: '/jarvis', title: 'focusd Jarvis', detail: 'Ask anything, hear it back.' },
  { to: '/clarity', title: 'Clarity', detail: 'Ambient sounds, NSDR, and box breathing.' },
  { to: '/progress', title: 'Stats', detail: 'Momentum, focus hours, and card mastery.' },
]

export default function Hub() {
  const { progress, registerVisitToday } = useStudy()
  const { user } = useUser()
  const navigate = useNavigate()
  const [target, setTarget] = useState(90)

  useEffect(() => {
    registerVisitToday()
  }, [registerVisitToday])

  const hours = (progress.totalFocusMinutes / 60).toFixed(1)

  const startSession = () => {
    navigate('/focus', { state: { target, autoStart: true } })
  }

  return (
    <div className="hub">
      <div className="hub-head">
        <div>
          <p className="hub-eyebrow">Today</p>
          <h1 className="hub-title">Welcome, {user.firstName || 'there'}.</h1>
        </div>
        <div className="hub-hours">
          <span className="hub-hours-num">{hours}</span>
          <span className="hub-hours-label">hours focused</span>
        </div>
      </div>

      <section className="hub-start-card">
        <h2 className="hub-start-title">How long do you want to study for?</h2>
        <div className="hub-duration-row">
          {DURATIONS.map((d) => (
            <button
              key={d}
              className={`hub-duration-btn ${target === d ? 'is-active' : ''}`}
              onClick={() => setTarget(d)}
            >
              {d} min
            </button>
          ))}
        </div>
        <p className="hub-start-copy">
          Your brain runs on roughly 90-minute ultradian cycles — waves of rising alertness followed by a natural dip.
          90 minutes matches your body's natural focus rhythm — but you can stop early any time.
        </p>
        <button className="btn btn-primary hub-start-btn" onClick={startSession}>
          Start study session
        </button>
      </section>

      <div className="hub-momentum">
        <span className="hub-momentum-label">Momentum</span>
        <div className="hub-momentum-track">
          <div className="hub-momentum-fill" style={{ width: `${progress.momentum}%` }} />
        </div>
      </div>

      <h2 className="hub-section-title">Jump back in</h2>
      <div className="hub-tile-grid">
        {TILES.map((tile) => (
          <Link key={tile.to} to={tile.to} className="hub-tile">
            <span className="hub-tile-title">{tile.title}</span>
            <span className="hub-tile-detail">{tile.detail}</span>
          </Link>
        ))}
      </div>

      <p className="hub-more-links">
        <Link to="/mmi">MMI practice</Link>
        <span aria-hidden="true">·</span>
        <Link to="/ethics">Ethics framework helper</Link>
        <span aria-hidden="true">·</span>
        <Link to="/subscribe">Subscription</Link>
      </p>

      <h2 className="hub-section-title">Flashcards</h2>
      <div className="deck-grid">
        {decks.map((deck) => (
          <Link key={deck.id} to={`/study/${deck.id}`} className={`deck-card deck-card--${deck.color}`}>
            <span className="deck-card-subject">{deck.subject}</span>
            <span className="deck-card-title">{deck.title}</span>
            <span className="deck-card-count">{deck.cards.length} cards · ~4 min</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
