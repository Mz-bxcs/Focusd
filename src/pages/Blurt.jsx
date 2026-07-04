import { useState, useEffect } from 'react'
import './Blurt.css'

const STORAGE_KEY = 'focusd:blurts'

function loadBlurts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (e) { /* ignore corrupt storage */ }
  return { topics: {}, personal: '' }
}

function saveBlurts(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) { /* non-fatal */ }
}

const TABS = [
  { id: 'topic', label: 'Topic blurt' },
  { id: 'personal', label: 'Personal statement' },
  { id: 'compare', label: 'Compare' },
]

export default function Blurt() {
  const [data, setData] = useState(loadBlurts)
  const [tab, setTab] = useState('topic')
  const [topicName, setTopicName] = useState('')
  const [draft, setDraft] = useState('')
  const [compareTopic, setCompareTopic] = useState('')
  const [compareDraft, setCompareDraft] = useState('')

  useEffect(() => { saveBlurts(data) }, [data])

  const topicNames = Object.keys(data.topics)

  const saveTopicBlurt = () => {
    if (!topicName.trim()) return
    setData((d) => ({
      ...d,
      topics: {
        ...d.topics,
        [topicName]: { ...(d.topics[topicName] || {}), pre: draft, updatedAt: new Date().toISOString() },
      },
    }))
    setDraft('')
  }

  const savePersonal = (text) => {
    setData((d) => ({ ...d, personal: text }))
  }

  const savePostBlurt = () => {
    if (!compareTopic) return
    setData((d) => ({
      ...d,
      topics: {
        ...d.topics,
        [compareTopic]: { ...d.topics[compareTopic], post: compareDraft, updatedAt: new Date().toISOString() },
      },
    }))
  }

  return (
    <div className="blurt-wrap">
      <p className="blurt-eyebrow">Blurt</p>
      <h1 className="blurt-title">Get it out of your head first.</h1>

      <div className="blurt-tabs">
        {TABS.map((t) => (
          <button key={t.id} className={`blurt-tab ${tab === t.id ? 'is-active' : ''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'topic' && (
        <div className="blurt-panel">
          <p className="blurt-hint">Before you study a topic, write everything you already know about it — gaps and all.</p>
          <input
            className="blurt-topic-input"
            type="text"
            placeholder="Topic (e.g. Cell transport)"
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
          />
          <textarea
            className="blurt-textarea"
            placeholder="Start writing..."
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={8}
          />
          <button className="btn btn-primary" onClick={saveTopicBlurt}>Save blurt</button>

          {topicNames.length > 0 && (
            <>
              <h2 className="blurt-section-title">Saved blurts</h2>
              <ul className="blurt-list">
                {topicNames.map((name) => (
                  <li key={name} className="blurt-list-item">{name}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {tab === 'personal' && (
        <div className="blurt-panel">
          <p className="blurt-hint">
            Blurt out work experience, volunteering, or anything you've done — raw material for personal statement anecdotes later.
          </p>
          <textarea
            className="blurt-textarea"
            placeholder="What have you done, seen, or learned that might be worth mentioning?"
            value={data.personal}
            onChange={(e) => savePersonal(e.target.value)}
            rows={10}
          />
        </div>
      )}

      {tab === 'compare' && (
        <div className="blurt-panel">
          <p className="blurt-hint">Pick a topic you've already blurted, study it, then blurt again — see what's new.</p>
          {topicNames.length === 0 ? (
            <p className="blurt-empty">No saved topic blurts yet — start one in the Topic blurt tab first.</p>
          ) : (
            <>
              <select className="blurt-select" value={compareTopic} onChange={(e) => setCompareTopic(e.target.value)}>
                <option value="">Choose a topic…</option>
                {topicNames.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>

              {compareTopic && (
                <div className="blurt-compare-grid">
                  <div>
                    <h3 className="blurt-compare-label">Before</h3>
                    <p className="blurt-compare-text">{data.topics[compareTopic].pre || '(empty)'}</p>
                  </div>
                  <div>
                    <h3 className="blurt-compare-label">What's new that you'd add now?</h3>
                    <textarea
                      className="blurt-textarea"
                      value={compareDraft}
                      onChange={(e) => setCompareDraft(e.target.value)}
                      rows={8}
                    />
                    <button className="btn btn-primary" onClick={savePostBlurt}>Save</button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
