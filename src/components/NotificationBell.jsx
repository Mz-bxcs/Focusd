import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NotificationBell.css'

export default function NotificationBell({ items, onItemAction }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const navigate = useNavigate()

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

  const hasAlert = items.some((item) => item.notable)

  const handleItemClick = (item) => {
    setOpen(false)
    if (item.action === 'subscribe') navigate('/subscribe')
    else if (item.action) onItemAction(item.action)
  }

  return (
    <div className="notif-bell-root" ref={rootRef}>
      <button
        className="notif-bell-btn"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Notifications${hasAlert ? ' (new)' : ''}`}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 3.6 1 5 2 6H4c1-1 2-2.4 2-6Z" />
          <path d="M9.5 17a2.5 2.5 0 0 0 5 0" />
        </svg>
        {hasAlert && <span className="notif-bell-dot" aria-hidden="true" />}
      </button>

      {open && (
        <div className="notif-bell-menu" role="menu">
          <p className="notif-bell-title">Notifications</p>
          {items.length === 0 && <p className="notif-bell-empty">You're all caught up.</p>}
          <ul className="notif-bell-list">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  className={`notif-bell-item ${item.action ? 'is-actionable' : ''}`}
                  onClick={() => handleItemClick(item)}
                  disabled={!item.action}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
