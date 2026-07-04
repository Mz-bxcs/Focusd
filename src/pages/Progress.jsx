import { useStudy } from '../context/StudyContext'
import { decks } from '../data/decks'
import './Progress.css'

const BOX_LABELS = { 1: 'Still new', 2: 'Getting there', 3: 'Solid', 4: 'Locked in' }

function momentumCopy(momentum) {
  if (momentum >= 70) return 'Strong momentum — you\'re on a roll.'
  if (momentum >= 30) return 'Building steadily.'
  if (momentum > 0) return 'Just getting going again — that\'s a fine place to start.'
  return 'No momentum yet — one session is all it takes to begin.'
}

export default function Progress() {
  const { progress } = useStudy()

  const cardStats = decks.flatMap((d) => d.cards.map((c) => ({ ...c, deckSubject: d.subject })))
  const reviewed = cardStats.filter((c) => progress.cardState[c.id])
  const boxCounts = [1, 2, 3, 4].map((box) => reviewed.filter((c) => progress.cardState[c.id]?.box === box).length)

  return (
    <div className="progress-page">
      <h1 className="progress-title">Progress</h1>
      <p className="progress-sub">No red numbers here — a quiet day doesn't erase the ones before it.</p>

      <div className="momentum-card">
        <div className="momentum-head">
          <span className="momentum-label">Momentum</span>
          <span className="momentum-num">{progress.momentum}</span>
        </div>
        <div className="momentum-track">
          <div className="momentum-fill" style={{ width: `${progress.momentum}%` }} />
        </div>
        <p className="momentum-copy">{momentumCopy(progress.momentum)}</p>
      </div>

      <div className="progress-stats">
        <div className="progress-stat">
          <span className="progress-stat-num">{progress.streak}</span>
          <span className="progress-stat-label">day streak</span>
        </div>
        <div className="progress-stat">
          <span className="progress-stat-num">{progress.totalCardsSeen}</span>
          <span className="progress-stat-label">cards reviewed</span>
        </div>
        <div className="progress-stat">
          <span className="progress-stat-num">{progress.sessionsCompleted}</span>
          <span className="progress-stat-label">focus sessions</span>
        </div>
      </div>

      <h2 className="progress-section-title">How cards are settling in</h2>
      <div className="progress-boxes">
        {[1, 2, 3, 4].map((box, i) => (
          <div key={box} className="progress-box-row">
            <span className="progress-box-label">{BOX_LABELS[box]}</span>
            <div className="progress-box-track">
              <div
                className="progress-box-fill"
                style={{ width: cardStats.length ? `${(boxCounts[i] / cardStats.length) * 100}%` : '0%' }}
              />
            </div>
            <span className="progress-box-count">{boxCounts[i]}</span>
          </div>
        ))}
      </div>

      {reviewed.length === 0 && (
        <p className="progress-empty">Nothing reviewed yet — that's fine, this fills in as you go.</p>
      )}
    </div>
  )
}
