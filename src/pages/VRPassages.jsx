import { useState } from 'react'
import { Link } from 'react-router-dom'
import { VR_PASSAGES } from '../data/ucat-vr-passages'
import './UCATSection.css'
import './VRPassages.css'

const TFCT_OPTIONS = ['True', 'False', "Can't Tell"]

export default function VRPassages() {
  const [passageIndex, setPassageIndex] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [finished, setFinished] = useState(false)

  const passage = VR_PASSAGES[passageIndex]
  const question = passage.questions[questionIndex]
  const options = question.type === 'tfct' ? TFCT_OPTIONS : question.options

  const choose = (value) => {
    if (selected) return
    setSelected(value)
    setAnswered((a) => a + 1)
    if (value === question.answer) setScore((s) => s + 1)
  }

  const next = () => {
    setSelected(null)
    if (questionIndex + 1 < passage.questions.length) {
      setQuestionIndex((i) => i + 1)
    } else if (passageIndex + 1 < VR_PASSAGES.length) {
      setPassageIndex((i) => i + 1)
      setQuestionIndex(0)
    } else {
      setFinished(true)
    }
  }

  if (finished) {
    return (
      <div className="ucat-q-wrap ucat-q-done">
        <p className="ucat-eyebrow">Verbal Reasoning — Passages</p>
        <h1 className="ucat-q-done-title">{score} of {answered} correct.</h1>
        <p className="ucat-q-done-copy">All 8 passages done — the same True/False/Can't Tell format as the real UCAT VR section.</p>
        <div className="ucat-q-done-actions">
          <button className="btn btn-primary" onClick={() => { setPassageIndex(0); setQuestionIndex(0); setScore(0); setAnswered(0); setFinished(false) }}>
            Practice again
          </button>
          <Link to="/ucat" className="btn btn-ghost">Back to UCAT Hub</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="ucat-q-wrap vr-passage-wrap">
      <div className="ucat-q-top">
        <Link to="/ucat" className="ucat-q-back">← UCAT Hub</Link>
        <span className="ucat-q-progress">Passage {passageIndex + 1} of {VR_PASSAGES.length} · Q{questionIndex + 1} of {passage.questions.length}</span>
      </div>

      <p className="ucat-eyebrow">{passage.category}</p>
      <h2 className="vr-passage-title">{passage.title}</h2>
      <div className="vr-passage-text">
        {passage.text.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
      </div>

      <div className="vr-question-card">
        <p className="vr-question-text">{question.type === 'tfct' ? question.statement : question.question}</p>
        <div className="ucat-q-options">
          {options.map((opt) => {
            const isCorrect = selected && opt === question.answer
            const isWrongPick = selected && opt === selected && opt !== question.answer
            return (
              <button
                key={opt}
                className={`ucat-q-option ${isCorrect ? 'is-correct' : ''} ${isWrongPick ? 'is-wrong' : ''}`}
                onClick={() => choose(opt)}
                disabled={!!selected}
              >
                <span>{opt}</span>
              </button>
            )
          })}
        </div>

        {selected && (
          <div className="ucat-q-explanation">
            <p>{question.explanation}</p>
            <button className="btn btn-primary" onClick={next}>
              {questionIndex + 1 < passage.questions.length || passageIndex + 1 < VR_PASSAGES.length ? 'Next question' : 'See results'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
