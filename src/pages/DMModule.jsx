import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { COURSE_MODULES } from '../data/ucat-dm-course'
import './UCATSection.css'
import './DMCourse.css'

function TheoryBlock({ block }) {
  if (block.type === 'table') {
    return (
      <div className="dm-theory-block">
        {block.heading && <h3 className="dm-theory-heading">{block.heading}</h3>}
        <div className="dm-table-wrap">
          <table className="dm-table">
            <thead>
              <tr>{block.headers.map((h) => <th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  if (block.type === 'tip') {
    return (
      <div className="dm-tip-block">
        {block.heading && <h3 className="dm-theory-heading">{block.heading}</h3>}
        {block.body.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
      </div>
    )
  }
  return (
    <div className="dm-theory-block">
      {block.heading && <h3 className="dm-theory-heading">{block.heading}</h3>}
      {block.body.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
    </div>
  )
}

export default function DMModule() {
  const { moduleId } = useParams()
  const module = COURSE_MODULES.find((m) => m.id === moduleId)

  const [drillIndex, setDrillIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)

  if (!module) {
    return (
      <div className="ucat-q-empty">
        <p>Unknown module.</p>
        <Link to="/ucat/dm-course" className="btn btn-ghost">Back to Learn</Link>
      </div>
    )
  }

  const drill = module.drills[drillIndex]

  const choose = (i) => {
    if (selected !== null) return
    setSelected(i)
    if (i === drill.answer) setScore((s) => s + 1)
  }

  const next = () => {
    setSelected(null)
    if (drillIndex + 1 < module.drills.length) setDrillIndex((i) => i + 1)
  }

  const drillsDone = selected !== null && drillIndex + 1 >= module.drills.length

  return (
    <div className="ucat-q-wrap dm-module-wrap">
      <div className="ucat-q-top">
        <Link to="/ucat/dm-course" className="ucat-q-back">← Learn</Link>
      </div>

      <p className="ucat-eyebrow">{module.subtitle}</p>
      <h1 className="dm-module-page-title">{module.icon} {module.title}</h1>

      {module.theory.map((block, i) => <TheoryBlock key={i} block={block} />)}

      <div className="dm-tip-block dm-speed-tip">
        <h3 className="dm-theory-heading">Speed tip</h3>
        <p>{module.speedTip}</p>
      </div>

      <h2 className="hub-section-title">Drills</h2>
      <p className="ucat-q-progress" style={{ marginBottom: 14 }}>Question {drillIndex + 1} of {module.drills.length} · {score} correct so far</p>

      <div className="vr-question-card">
        <p className="vr-question-text" style={{ whiteSpace: 'pre-wrap' }}>{drill.stem}</p>
        <div className="ucat-q-options">
          {drill.options.map((opt, i) => {
            const isCorrect = selected !== null && i === drill.answer
            const isWrongPick = selected === i && i !== drill.answer
            return (
              <button
                key={i}
                className={`ucat-q-option ${isCorrect ? 'is-correct' : ''} ${isWrongPick ? 'is-wrong' : ''}`}
                onClick={() => choose(i)}
                disabled={selected !== null}
              >
                <span>{opt}</span>
              </button>
            )
          })}
        </div>

        {selected !== null && (
          <div className="ucat-q-explanation">
            <p>{drill.explanation}</p>
            {!drillsDone && <button className="btn btn-primary" onClick={next}>Next drill</button>}
            {drillsDone && <Link to="/ucat/dm-course" className="btn btn-primary">Back to Learn</Link>}
          </div>
        )}
      </div>
    </div>
  )
}
