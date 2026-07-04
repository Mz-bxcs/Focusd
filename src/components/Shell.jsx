import { useState, useEffect, useCallback, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import MoodChecker from './MoodChecker'
import NotificationBell from './NotificationBell'
import UserMenu from './UserMenu'
import JarvisFab from './JarvisFab'
import { useStudy } from '../context/StudyContext'
import { useUser } from '../context/UserContext'
import './Shell.css'

const NAV = [
  { to: '/', label: 'Hub', end: true },
  { to: '/ucat', label: 'Learn' },
  { to: '/clarity', label: 'Clarity' },
]

const LAST_HOURLY_CHECK_KEY = 'focusd:last-hourly-mood-check'
const HOUR_MS = 60 * 60 * 1000

export default function Shell({ children }) {
  const { progress, recordMood } = useStudy()
  const { user } = useUser()
  const [showHourlyCheck, setShowHourlyCheck] = useState(false)

  const maybePromptMoodCheck = useCallback(() => {
    const last = Number(localStorage.getItem(LAST_HOURLY_CHECK_KEY) || 0)
    if (Date.now() - last >= HOUR_MS) {
      setShowHourlyCheck(true)
      localStorage.setItem(LAST_HOURLY_CHECK_KEY, String(Date.now()))
    }
  }, [])

  useEffect(() => {
    // First-ever visit: start the hour clock rather than prompting immediately.
    if (!localStorage.getItem(LAST_HOURLY_CHECK_KEY)) {
      localStorage.setItem(LAST_HOURLY_CHECK_KEY, String(Date.now()))
    }
    const interval = setInterval(maybePromptMoodCheck, 60 * 1000)
    return () => clearInterval(interval)
  }, [maybePromptMoodCheck])

  const notifications = useMemo(() => {
    const items = []
    if (showHourlyCheck) {
      items.push({ id: 'mood', text: 'Time for a quick mood check-in.', action: 'mood', notable: true })
    }
    items.push(
      progress.streak > 0
        ? { id: 'streak', text: `You're on a ${progress.streak}-day streak — keep it going.` }
        : { id: 'streak', text: 'No streak yet — one session today starts one.' }
    )
    if (progress.momentum >= 70) {
      items.push({ id: 'momentum', text: "Strong momentum — you're on a roll." })
    }
    if (!user.subscribed) {
      items.push({ id: 'premium', text: 'Unlock Jarvis, MMI practice, and more with Premium.', action: 'subscribe', notable: true })
    }
    return items
  }, [showHourlyCheck, progress.streak, progress.momentum, user.subscribed])

  const handleNotificationAction = (action) => {
    if (action === 'mood') setShowHourlyCheck(true)
  }

  return (
    <div className="shell">
      <header className="shell-header">
        <div className="container shell-header-inner">
          <a href="/" className="shell-logo">
            <img src="/favicon.svg" width="26" height="25" alt="" aria-hidden="true" />
            <span>focusd</span>
          </a>
          <nav className="shell-nav" aria-label="Main">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => 'shell-nav-link' + (isActive ? ' is-active' : '')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="shell-account-cluster">
            <NotificationBell items={notifications} onItemAction={handleNotificationAction} />
            <UserMenu />
          </div>
        </div>
      </header>
      <main className="shell-main container">{children}</main>

      <JarvisFab />

      <MoodChecker
        isOpen={showHourlyCheck}
        onClose={() => setShowHourlyCheck(false)}
        type="hourly"
        onMoodRecorded={(type, mood) => recordMood(type, mood)}
      />
    </div>
  )
}
