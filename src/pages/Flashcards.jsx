import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { findDeck } from '../data/decks'
import { useStudy } from '../context/StudyContext'
import { useAccessibility } from '../context/AccessibilityContext'
import { speak } from '../lib/speech'
import './Flashcards.css'

export default function Flashcards() {
  const { deckId } = useParams()
  const navigate = useNavigate()
  const deck = findDeck(deckId)
  const { markCardReviewed } = useStudy()
  const { settings } = useAccessibility()

  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [doneCount, setDoneCount] = useState(0)

  const card = deck?.cards[index]

  useEffect(() => {
    if (settings.ttsEnabled && card) {
      speak(flipped ? card.back : card.front, { rate: 0.95 })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flipped, index])

  const advance = useCallback((confidence) => {
    if (!card) return
    markCardReviewed(card.id, confidence)
    setDoneCount((c) => c + 1)
    setFlipped(false)
    if (index + 1 < deck.cards.length) {
      setIndex((i) => i + 1)
    } else {
      navigate('/', { replace: true })
    }
  }, [card, deck, index, markCardReviewed, navigate])

  if (!deck) {
    return (
      <div className="flash-empty">
        <p>Couldn't find that deck.</p>
        <Link to="/" className="btn btn-ghost">Back to today</Link>
      </div>
    )
  }

  return (
    <div className="flash-wrap">
      <div className="flash-top">
        <Link to="/" className="flash-back">← Back to today</Link>
        <span className="flash-progress-label">{doneCount + 1} of {deck.cards.length}</span>
      </div>

      <div className="flash-progress-track">
        <div className="flash-progress-fill" style={{ width: `${(doneCount / deck.cards.length) * 100}%` }} />
      </div>

      <button
        className={`flash-card ${flipped ? 'is-flipped' : ''} ${deck.template === 'case' ? 'flash-card--case' : ''}`}
        onClick={() => setFlipped((f) => !f)}
        aria-label={flipped ? 'Showing answer, tap to show question' : 'Showing question, tap to reveal answer'}
      >
        <span className="flash-card-eyebrow">
          {flipped ? (deck.template === 'case' ? 'Differential' : 'Answer') : (deck.template === 'case' ? 'Clinical case' : deck.subject)}
        </span>
        <span className="flash-card-text">{flipped ? card.back : card.front}</span>
        <span className="flash-card-hint">{flipped ? 'Tap to see the question again' : 'Tap to reveal the answer'}</span>
      </button>

      <div className="flash-tools">
        <button className="flash-tts-btn" onClick={(e) => { e.stopPropagation(); speak(flipped ? card.back : card.front) }}>
          🔊 Read aloud
        </button>
      </div>

      {flipped && (
        <div className="flash-confidence">
          <p className="flash-confidence-label">How did that feel?</p>
          <div className="flash-confidence-btns">
            <button className="flash-conf flash-conf--again" onClick={() => advance('again')}>Again</button>
            <button className="flash-conf flash-conf--good" onClick={() => advance('good')}>Good</button>
            <button className="flash-conf flash-conf--easy" onClick={() => advance('easy')}>Easy</button>
          </div>
        </div>
      )}
    </div>
  )
}
