import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const STORAGE_KEY = 'focusd:user'

const defaults = {
  firstName: '',
  learningStyle: null, // 'visual' | 'reading' | 'verbal' | 'active'
  subscribed: false,
}

const UserContext = createContext(null)

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...defaults, ...JSON.parse(raw) }
  } catch (e) { /* ignore corrupt storage */ }
  return defaults
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(loadInitial)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    } catch (e) { /* storage full or unavailable — non-fatal */ }
  }, [user])

  const setFirstName = useCallback((firstName) => setUser((u) => ({ ...u, firstName })), [])
  const setLearningStyle = useCallback((learningStyle) => setUser((u) => ({ ...u, learningStyle })), [])
  const toggleSubscribed = useCallback(() => setUser((u) => ({ ...u, subscribed: !u.subscribed })), [])

  return (
    <UserContext.Provider value={{ user, setFirstName, setLearningStyle, toggleSubscribed }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used inside UserProvider')
  return ctx
}
