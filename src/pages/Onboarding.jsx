import { useAccessibility } from '../context/AccessibilityContext'
import { useUser } from '../context/UserContext'
import SensoryDial from '../components/SensoryDial'
import './Onboarding.css'

const PROFILES = [
  {
    id: 'adhd',
    title: 'I have ADHD',
    detail: 'Short sessions, momentum over perfection, read-aloud on by default.',
  },
  {
    id: 'autistic',
    title: 'I\'m autistic',
    detail: 'Predictable layout, low sensory load, motion off by default.',
  },
  {
    id: 'dyslexic',
    title: 'I\'m dyslexic',
    detail: 'Dyslexia-friendly type, read-aloud on, generous line spacing.',
  },
  {
    id: 'general',
    title: 'None of these, I just learn differently',
    detail: 'Balanced defaults. Everything below is adjustable any time.',
  },
]

const LEARNING_STYLES = [
  { id: 'visual', title: 'Visual', detail: 'Diagrams and images make it click.' },
  { id: 'reading', title: 'Reading & writing', detail: 'Notes and written explanations.' },
  { id: 'verbal', title: 'Verbal / audio', detail: 'Hearing it explained, read aloud.' },
  { id: 'active', title: 'Hands-on / active recall', detail: 'Testing yourself beats re-reading.' },
]

export default function Onboarding() {
  const { settings, applyProfilePreset } = useAccessibility()
  const { user, setFirstName, setLearningStyle } = useUser()

  if (settings.profile) {
    return (
      <div className="onboarding">
        <div className="onboarding-inner container">
          <div className="onboarding-mark">
            <img src="/favicon.svg" width="40" height="38" alt="" aria-hidden="true" />
          </div>
          <h1 className="onboarding-title">Almost there</h1>
          <p className="onboarding-sub">
            One more thing — this helps us tailor flashcards, study plans, and the UCAT hub to how you actually learn.
          </p>

          <label className="onboarding-label" htmlFor="firstName">Your first name</label>
          <input
            id="firstName"
            className="onboarding-input"
            type="text"
            placeholder="e.g. Sam"
            value={user.firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <h2 className="onboarding-question">How do you learn best?</h2>
          <p className="onboarding-hint">Pick one to get started — you can change this any time in Settings.</p>

          <div className="onboarding-grid">
            {LEARNING_STYLES.map((s) => (
              <button key={s.id} className="onboarding-card" onClick={() => setLearningStyle(s.id)}>
                <span className="onboarding-card-title">{s.title}</span>
                <span className="onboarding-card-detail">{s.detail}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="onboarding">
      <div className="onboarding-inner container">
        <div className="onboarding-mark">
          <img src="/favicon.svg" width="40" height="38" alt="" aria-hidden="true" />
        </div>
        <h1 className="onboarding-title">focusd</h1>
        <p className="onboarding-sub">
          Study for the UCAT and your medicine/dentistry application in the way that actually works for your brain.
        </p>

        <h2 className="onboarding-question">How do you focus best?</h2>
        <p className="onboarding-hint">This just sets a starting point. Nothing here is locked in.</p>

        <div className="onboarding-grid">
          {PROFILES.map((p) => (
            <button key={p.id} className="onboarding-card" onClick={() => applyProfilePreset(p.id)}>
              <span className="onboarding-card-title">{p.title}</span>
              <span className="onboarding-card-detail">{p.detail}</span>
            </button>
          ))}
        </div>

        <div className="onboarding-dial-preview">
          <p className="onboarding-dial-label">Or set the sensory dial yourself first —</p>
          <SensoryDial />
        </div>
      </div>
    </div>
  )
}
