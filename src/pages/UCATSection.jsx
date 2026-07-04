import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SECTION_META, QUESTIONS } from '../data/ucat'
import './UCATSection.css'

export default function UCATSection() {
  const { section } = useParams()
  const meta = SECTION_META[section]
  const questions = useMemo(() => QUESTIONS.filter((q) => q.section === section), [section])

  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  if (!meta) {
    return (
      <div className="ucat-q-empty">
        <p>Unknown UCAT section.</p>
        <Link to="/ucat" className="btn btn-ghost">Back to UCAT Hub</Link>
      </div>
    )
  }

  const question = questions[index]

  const choose = (key) => {
    if (selected) return
    setSelected(key)
    if (key === question.correct) setScore((s) => s + 1)
  }

  const next = () => {
    setSelected(null)
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1)
    } else {
      setFinished(true)
    }
  }

  if (finished) {
    return (
      <div className="ucat-q-wrap ucat-q-done">
        <p className="ucat-eyebrow">{meta.label}</p>
        <h1 className="ucat-q-done-title">{score} of {questions.length} correct.</h1>
        <p className="ucat-q-done-copy">Nice work — every question here sharpens the same instincts the real UCAT tests.</p>
        <div className="ucat-q-done-actions">
          <button className="btn btn-primary" onClick={() => { setIndex(0); setScore(0); setFinished(false) }}>
            Practice again
          </button>
          <Link to="/ucat" className="btn btn-ghost">Back to UCAT Hub</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="ucat-q-wrap">
      <div className="ucat-q-top">
        <Link to="/ucat" className="ucat-q-back">← UCAT Hub</Link>
        <span className="ucat-q-progress">{index + 1} of {questions.length}</span>
      </div>

      <p className="ucat-eyebrow">{meta.label}</p>

      {question.context && <p className="ucat-q-context">{question.context}</p>}
      <h2 className="ucat-q-prompt">{question.prompt}</h2>

      <div className="ucat-q-options">
        {question.options.map((opt) => {
          const isCorrect = selected && opt.key === question.correct
          const isWrongPick = selected && opt.key === selected && opt.key !== question.correct
          return (
            <button
              key={opt.key}
              className={`ucat-q-option ${isCorrect ? 'is-correct' : ''} ${isWrongPick ? 'is-wrong' : ''}`}
              onClick={() => choose(opt.key)}
              disabled={!!selected}
            >
              <span className="ucat-q-option-key">{opt.key}</span>
              <span>{opt.label}</span>
            </button>
          )
        })}
      </div>

      {selected && (
        <div className="ucat-q-explanation">
          <p>{question.explanation}</p>
          <button className="btn btn-primary" onClick={next}>
            {index + 1 < questions.length ? 'Next question' : 'See results'}
          </button>
        </div>
      )}
    </div>
  )
}
