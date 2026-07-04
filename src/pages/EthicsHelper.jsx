import { useState } from 'react'
import { useUser } from '../context/UserContext'
import { useGeminiCall } from '../lib/gemini'
import PremiumUpsell from '../components/PremiumUpsell'
import './StudyPlan.css'

export default function EthicsHelper() {
  const { user } = useUser()
  const { loading, error, result, run } = useGeminiCall()
  const [dilemma, setDilemma] = useState('')

  const generate = () => {
    if (!dilemma.trim()) return
    run(`A UK medicine/dentistry applicant describes this ethical dilemma: "${dilemma}"
Do not give a scripted "correct" answer. Instead, walk through it using the four pillars of medical ethics — autonomy, beneficence, non-maleficence, and justice — explaining what each pillar suggests about the situation, and where they might conflict.
End by inviting the student to weigh the pillars themselves, since UCAT/interview scoring rewards structured reasoning over a single "right" answer.`)
  }

  if (!user.subscribed) {
    return <PremiumUpsell feature="The ethics framework helper" />
  }

  return (
    <div className="plan-wrap">
      <p className="plan-eyebrow">Ethics Framework Helper</p>
      <h1 className="plan-title">Think it through, don't just look it up.</h1>
      <p className="plan-sub">Describe a dilemma and get a reasoning framework — not a scripted answer.</p>

      <textarea
        className="plan-input"
        style={{ minHeight: 120, resize: 'vertical', marginBottom: 14 }}
        placeholder="e.g. A patient refuses a life-saving treatment for religious reasons..."
        value={dilemma}
        onChange={(e) => setDilemma(e.target.value)}
      />
      <button className="btn btn-primary plan-generate-btn" onClick={generate} disabled={loading}>
        {loading ? 'Thinking…' : 'Get a framework'}
      </button>

      {error && <p className="plan-error">{error}</p>}

      {result && (
        <div className="plan-result">
          <h2 className="plan-result-title">Reasoning framework</h2>
          <p className="plan-result-text">{result}</p>
        </div>
      )}
    </div>
  )
}
