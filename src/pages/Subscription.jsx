import { useUser } from '../context/UserContext'
import './Subscription.css'

const FREE_FEATURES = ['Limited focus sessions', 'Core flashcard decks', 'UCAT question bank']
const PREMIUM_FEATURES = ['Unlimited focus sessions & flashcards', 'Gemini study plans, MMI practice & ethics helper', 'focusd Jarvis — ask-anything voice assistant']

export default function Subscription() {
  const { user, toggleSubscribed } = useUser()

  return (
    <div className="sub-wrap">
      <p className="sub-eyebrow">Subscription</p>
      <h1 className="sub-title">This is a demo toggle — no real payment happens here.</h1>
      <p className="sub-sub">In a real build, this is exactly where a payment provider would plug in.</p>

      <div className="sub-grid">
        <div className={`sub-card ${!user.subscribed ? 'is-current' : ''}`}>
          <h2 className="sub-card-title">Free</h2>
          <ul className="sub-feature-list">
            {FREE_FEATURES.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
        <div className={`sub-card sub-card--premium ${user.subscribed ? 'is-current' : ''}`}>
          <h2 className="sub-card-title">Premium</h2>
          <ul className="sub-feature-list">
            {PREMIUM_FEATURES.map((f) => <li key={f}>{f}</li>)}
          </ul>
          <button className="btn btn-primary sub-toggle-btn" onClick={toggleSubscribed}>
            {user.subscribed ? 'Cancel Premium' : 'Subscribe to Premium'}
          </button>
        </div>
      </div>
    </div>
  )
}
