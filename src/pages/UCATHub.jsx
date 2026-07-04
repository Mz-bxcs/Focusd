import { Link } from 'react-router-dom'
import { SECTION_META, QUESTIONS } from '../data/ucat'
import './UCATHub.css'

const ICON_PATHS = {
  VR: (
    <>
      <path d="M4 5.5c2.2-1 4.8-1 7 0v13c-2.2-1-4.8-1-7 0z" />
      <path d="M18 5.5c-2.2-1-4.8-1-7 0v13c2.2-1 4.8-1 7 0z" />
    </>
  ),
  DM: (
    <>
      <path d="M11 3v15M6 6h10M6 6 3 12a3 3 0 0 0 6 0zM18 6l-3 6a3 3 0 0 0 6 0z" />
      <path d="M7 21h8" />
    </>
  ),
  QR: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M4 20h16" />
    </>
  ),
  AR: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <circle cx="17" cy="7" r="3.5" />
      <path d="M3.5 20.5 8 13l4.5 7.5z" />
    </>
  ),
  SJT: (
    <>
      <path d="M20 11.5a8 8 0 1 1-3.4-6.55" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
}

function SectionIcon({ code, color }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICON_PATHS[code]}
    </svg>
  )
}

export default function UCATHub() {
  return (
    <div className="ucat-hub">
      <p className="ucat-eyebrow">Learn</p>
      <h1 className="ucat-title">Practice by section.</h1>
      <p className="ucat-sub">All five official UCAT sections, with a tailored Gemini practice plan for each.</p>

      <div className="ucat-section-grid">
        {Object.entries(SECTION_META).map(([code, meta]) => {
          const count = QUESTIONS.filter((q) => q.section === code).length
          return (
            <div key={code} className="ucat-section-card">
              <Link to={`/ucat/${code}`} className="ucat-section-card-link">
                <span className="ucat-section-icon" style={{ background: `${meta.color}1a` }}>
                  <SectionIcon code={code} color={meta.color} />
                </span>
                <span className="ucat-section-label">{meta.label}</span>
                <span className="ucat-section-desc">{meta.desc}</span>
                <span className="ucat-section-count">{count} questions</span>
              </Link>
              {code === 'VR' && <Link to="/ucat/vr-passages" className="ucat-section-extra">Practice full passages →</Link>}
              {code === 'DM' && <Link to="/ucat/dm-course" className="ucat-section-extra">Learn the theory →</Link>}
            </div>
          )
        })}
      </div>

      <Link to="/study-plan" className="ucat-plan-link">Generate a tailored UCAT practice plan →</Link>
    </div>
  )
}
