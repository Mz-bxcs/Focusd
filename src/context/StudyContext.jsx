import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const STORAGE_KEY = 'focusd:progress'
const MOOD_LOG_KEY = 'focusd:mood-log'

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

const defaults = {
  streak: 0,
  lastStudyDate: null,
  cardsSeenToday: 0,
  totalCardsSeen: 0,
  cardState: {}, // cardId -> { box: 1-4, lastSeen }
  focusMinutesToday: 0,
  sessionsCompleted: 0,
  sessions: [], // { date, durationMin, distractions }
  totalFocusMinutes: 0,
  momentum: 0, // 0-100, gentle decay instead of a hard streak reset
  lastMomentumDate: null,
}

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...defaults, ...JSON.parse(raw) }
  } catch (e) { /* ignore corrupt storage */ }
  return defaults
}

function loadMoodLog() {
  try {
    const raw = localStorage.getItem(MOOD_LOG_KEY)
    if (raw) return JSON.parse(raw)
  } catch (e) { /* ignore corrupt storage */ }
  return []
}

const StudyContext = createContext(null)

export function StudyProvider({ children }) {
  const [progress, setProgress] = useState(loadInitial)
  const [moodLog, setMoodLog] = useState(loadMoodLog)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch (e) { /* non-fatal */ }
  }, [progress])

  useEffect(() => {
    try {
      localStorage.setItem(MOOD_LOG_KEY, JSON.stringify(moodLog))
    } catch (e) { /* non-fatal */ }
  }, [moodLog])

  // type: 'before' | 'after' | 'hourly'
  const recordMood = useCallback((type, moodValue) => {
    setMoodLog((log) => [...log, { date: new Date().toISOString(), type, mood: moodValue }])
  }, [])

  // Call once when the app opens on a given day to roll the streak forward
  const registerVisitToday = useCallback(() => {
    setProgress((p) => {
      const today = todayStr()
      if (p.lastStudyDate === today) return p
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
      const continued = p.lastStudyDate === yesterday
      return {
        ...p,
        streak: p.lastStudyDate ? (continued ? p.streak : (p.lastStudyDate === today ? p.streak : (continued ? p.streak + 0 : 0))) : p.streak,
        cardsSeenToday: p.lastStudyDate === today ? p.cardsSeenToday : 0,
        focusMinutesToday: p.lastStudyDate === today ? p.focusMinutesToday : 0,
      }
    })
  }, [])

  const markCardReviewed = useCallback((cardId, confidence) => {
    setProgress((p) => {
      const today = todayStr()
      const prevState = p.cardState[cardId] || { box: 1, lastSeen: null }
      const nextBox =
        confidence === 'again' ? 1 :
        confidence === 'good' ? Math.min(prevState.box + 1, 4) :
        Math.min(prevState.box + 2, 4) // 'easy'

      const isNewDay = p.lastStudyDate !== today
      const continuedStreak = isNewDay
        ? (p.lastStudyDate === new Date(Date.now() - 86400000).toISOString().slice(0, 10) ? p.streak + 1 : (p.lastStudyDate ? 1 : 1))
        : p.streak

      return {
        ...p,
        streak: continuedStreak,
        lastStudyDate: today,
        cardsSeenToday: (isNewDay ? 0 : p.cardsSeenToday) + 1,
        totalCardsSeen: p.totalCardsSeen + 1,
        cardState: {
          ...p.cardState,
          [cardId]: { box: nextBox, lastSeen: today },
        },
      }
    })
  }, [])

  const logFocusMinutes = useCallback((minutes) => {
    setProgress((p) => ({
      ...p,
      focusMinutesToday: p.focusMinutesToday + minutes,
      sessionsCompleted: p.sessionsCompleted + 1,
    }))
  }, [])

  // Logs a completed focus session and nudges the momentum meter — a
  // gentle up/down instead of a streak that resets hard on a missed day.
  const logSession = useCallback(({ durationMin, distractions }) => {
    setProgress((p) => {
      const today = todayStr()
      const gapDays = p.lastMomentumDate
        ? Math.round((new Date(today) - new Date(p.lastMomentumDate)) / 86400000)
        : 0
      const decayed = p.lastMomentumDate
        ? Math.max(0, p.momentum - Math.max(0, gapDays - 1) * 5)
        : p.momentum
      const alreadyLoggedToday = p.lastMomentumDate === today
      const momentum = alreadyLoggedToday ? decayed : Math.min(100, decayed + 10)

      return {
        ...p,
        sessions: [...p.sessions, { date: today, durationMin, distractions }],
        totalFocusMinutes: p.totalFocusMinutes + durationMin,
        momentum,
        lastMomentumDate: today,
      }
    })
  }, [])

  return (
    <StudyContext.Provider value={{ progress, registerVisitToday, markCardReviewed, logFocusMinutes, logSession, moodLog, recordMood }}>
      {children}
    </StudyContext.Provider>
  )
}

export function useStudy() {
  const ctx = useContext(StudyContext)
  if (!ctx) throw new Error('useStudy must be used inside StudyProvider')
  return ctx
}
