import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { useStudy } from '../context/StudyContext'
import './UserMenu.css'

const LEARNING_STYLE_LABELS = {
  visual: 'Visual learner',
  reading: 'Reading / writing learner',
  verbal: 'Verbal learner',
  active: 'Active learner',
}

export default function UserMenu() {
  const { user } = useUser()
  const { progress } = useStudy()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const onEscape = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onOutside)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('mousedown', onOutside)
      document.removeEventListener('keydown', onEscape)
    }
  }, [open])

  const initial = (user.firstName || 'S').charAt(0).toUpperCase()
  const hours = (progress.totalFocusMinutes / 60).toFixed(1)

  return (
    <div className="user-menu-root" ref={rootRef}>
      <button
        className="user-menu-btn"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Profile menu"
      >
        {initial}
      </button>

      {open && (
        <div className="user-menu-panel" role="menu">
          <div className="user-menu-head">
            <span className="user-menu-avatar">{initial}</span>
            <div>
              <p className="user-menu-name">{user.firstName || 'Student'}</p>
              <p className="user-menu-style">{LEARNING_STYLE_LABELS[user.learningStyle] || 'Learning style not set'}</p>
            </div>
          </div>

          <p className={`user-menu-plan ${user.subscribed ? 'is-premium' : ''}`}>
            {user.subscribed ? 'Premium' : 'Free plan'}
          </p>

          <div className="user-menu-stats">
            <div className="user-menu-stat">
              <span className="user-menu-stat-num">{progress.streak}</span>
              <span className="user-menu-stat-label">day streak</span>
            </div>
            <div className="user-menu-stat">
              <span className="user-menu-stat-num">{hours}</span>
              <span className="user-menu-stat-label">hours focused</span>
            </div>
          </div>

          <div className="user-menu-links">
            <Link to="/progress" className="user-menu-link" onClick={() => setOpen(false)}>
              View full progress
            </Link>
            <Link to="/settings" className="user-menu-link" onClick={() => setOpen(false)}>
              Settings
            </Link>
            {!user.subscribed && (
              <Link to="/subscribe" className="user-menu-link user-menu-link--accent" onClick={() => setOpen(false)}>
                Upgrade to Premium
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
