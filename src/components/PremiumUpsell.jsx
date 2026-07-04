import { Link } from 'react-router-dom'
import './PremiumUpsell.css'

export default function PremiumUpsell({ feature }) {
  return (
    <div className="upsell-card">
      <h2 className="upsell-title">{feature} is a Premium feature</h2>
      <p className="upsell-copy">Free plan covers core flashcards and UCAT practice. Gemini-powered tools are part of Premium.</p>
      <Link to="/subscribe" className="btn btn-primary">See Premium</Link>
    </div>
  )
}
