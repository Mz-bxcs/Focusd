import { Link, useLocation } from 'react-router-dom'
import './JarvisFab.css'

export default function JarvisFab() {
  const { pathname } = useLocation()
  if (pathname === '/jarvis') return null

  return (
    <Link to="/jarvis" className="jarvis-fab" aria-label="Open focusd Jarvis">
      <svg viewBox="0 0 40 40" width="26" height="26" aria-hidden="true">
        <circle cx="20" cy="20" r="17" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="11" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="5" fill="rgba(255,255,255,0.9)" />
      </svg>
    </Link>
  )
}
