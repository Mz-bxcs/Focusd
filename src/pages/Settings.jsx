import { useAccessibility } from '../context/AccessibilityContext'
import SensoryDial from '../components/SensoryDial'
import './Settings.css'

const PROFILES = [
  { id: 'adhd', label: 'ADHD' },
  { id: 'autistic', label: 'Autistic' },
  { id: 'dyslexic', label: 'Dyslexic' },
  { id: 'general', label: 'General' },
]

function Toggle({ checked, onChange, label, sub }) {
  return (
    <button className="toggle-row" onClick={onChange} role="switch" aria-checked={checked}>
      <span className="toggle-text">
        <span className="toggle-label">{label}</span>
        {sub && <span className="toggle-sub">{sub}</span>}
      </span>
      <span className={`toggle-track ${checked ? 'is-on' : ''}`}>
        <span className="toggle-thumb" />
      </span>
    </button>
  )
}

export default function Settings() {
  const { settings, toggleHighContrast, toggleDyslexicFont, toggleTts, toggleReduceMotion, applyProfilePreset } = useAccessibility()

  return (
    <div className="settings">
      <h1 className="settings-title">Settings</h1>
      <p className="settings-sub">Everything here updates live — nothing needs a save button.</p>

      <section className="settings-section">
        <h2 className="settings-section-title">Sensory dial</h2>
        <p className="settings-section-copy">Turn the whole interface up or down — type size, spacing, motion, and color intensity all move together.</p>
        <SensoryDial />
      </section>

      <section className="settings-section">
        <h2 className="settings-section-title">Reading</h2>
        <Toggle
          checked={settings.dyslexicFont}
          onChange={toggleDyslexicFont}
          label="Dyslexia-friendly type"
          sub="Switches body and headings to Atkinson Hyperlegible"
        />
        <Toggle
          checked={settings.ttsEnabled}
          onChange={toggleTts}
          label="Read cards aloud automatically"
          sub="You can always tap 'Read aloud' manually too"
        />
        <Toggle
          checked={settings.highContrast}
          onChange={toggleHighContrast}
          label="High contrast"
          sub="Pure black text on white, stronger borders"
        />
      </section>

      <section className="settings-section">
        <h2 className="settings-section-title">Motion &amp; sound</h2>
        <Toggle
          checked={settings.reduceMotion}
          onChange={toggleReduceMotion}
          label="Reduce motion"
          sub="Turns off animations regardless of the sensory dial. Ambient sounds and voice features in Clarity are always tap-to-play, never automatic."
        />
      </section>

      <section className="settings-section">
        <h2 className="settings-section-title">Starting profile</h2>
        <p className="settings-section-copy">Re-applying a profile resets the dial and toggles to its defaults — you can always adjust after.</p>
        <div className="settings-profile-row">
          {PROFILES.map((p) => (
            <button
              key={p.id}
              className={`settings-profile-btn ${settings.profile === p.id ? 'is-active' : ''}`}
              onClick={() => applyProfilePreset(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
