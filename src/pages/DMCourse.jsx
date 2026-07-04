import { Link } from 'react-router-dom'
import { COURSE_MODULES } from '../data/ucat-dm-course'
import './UCATHub.css'
import './DMCourse.css'

export default function DMCourse() {
  return (
    <div className="ucat-hub">
      <p className="ucat-eyebrow">Decision Making — Learn</p>
      <h1 className="ucat-title">The theory behind the questions.</h1>
      <p className="ucat-sub">Six short modules — the reasoning patterns DM actually tests, not just more practice questions.</p>

      <div className="dm-module-grid">
        {COURSE_MODULES.map((m) => (
          <Link key={m.id} to={`/ucat/dm-course/${m.id}`} className="dm-module-card">
            <span className="dm-module-icon">{m.icon}</span>
            <span className="dm-module-title">{m.title}</span>
            <span className="dm-module-subtitle">{m.subtitle}</span>
            <span className="dm-module-mins">~{m.estimatedMins} min</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
