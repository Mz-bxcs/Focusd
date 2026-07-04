import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const STORAGE_KEY = 'focusd:accessibility'

const STIM_LABELS = {
  1: { name: 'Calm', blurb: 'Bigger text, more air, motion off.' },
  2: { name: 'Quiet', blurb: 'Gentle spacing, motion kept minimal.' },
  3: { name: 'Balanced', blurb: 'The default — nothing turned up or down.' },
  4: { name: 'Bright', blurb: 'Denser layout, a bit more energy.' },
  5: { name: 'Vivid', blurb: 'Full motion, full color, tightest layout.' },
}

const defaults = {
  stim: 3,
  highContrast: false,
  dyslexicFont: false,
  ttsEnabled: false,
  reduceMotion: false,
  profile: null, // 'adhd' | 'autistic' | 'dyslexic' | 'general'
}

const AccessibilityContext = createContext(null)

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...defaults, ...JSON.parse(raw) }
  } catch (e) { /* ignore corrupt storage */ }
  return defaults
}

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(loadInitial)

  useEffect(() => {
    document.documentElement.setAttribute('data-stim', String(settings.stim))
    document.documentElement.setAttribute('data-high-contrast', String(settings.highContrast))
    document.documentElement.setAttribute('data-dyslexic-font', String(settings.dyslexicFont))
    document.documentElement.setAttribute('data-reduce-motion', String(settings.reduceMotion))
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch (e) { /* storage full or unavailable — non-fatal */ }
  }, [settings])

  const setStim = useCallback((n) => setSettings((s) => ({ ...s, stim: n })), [])
  const toggleHighContrast = useCallback(() => setSettings((s) => ({ ...s, highContrast: !s.highContrast })), [])
  const toggleDyslexicFont = useCallback(() => setSettings((s) => ({ ...s, dyslexicFont: !s.dyslexicFont })), [])
  const toggleTts = useCallback(() => setSettings((s) => ({ ...s, ttsEnabled: !s.ttsEnabled })), [])
  const toggleReduceMotion = useCallback(() => setSettings((s) => ({ ...s, reduceMotion: !s.reduceMotion })), [])
  const setProfile = useCallback((p) => setSettings((s) => ({ ...s, profile: p })), [])

  const applyProfilePreset = useCallback((profile) => {
    // Sensible starting points per profile — all still fully adjustable after.
    const presets = {
      adhd: { stim: 4, ttsEnabled: true, dyslexicFont: false },
      autistic: { stim: 1, ttsEnabled: false, dyslexicFont: false },
      dyslexic: { stim: 3, ttsEnabled: true, dyslexicFont: true },
      general: { stim: 3, ttsEnabled: false, dyslexicFont: false },
    }
    setSettings((s) => ({ ...s, ...presets[profile], profile }))
  }, [])

  return (
    <AccessibilityContext.Provider
      value={{ settings, setStim, toggleHighContrast, toggleDyslexicFont, toggleTts, toggleReduceMotion, setProfile, applyProfilePreset, STIM_LABELS }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext)
  if (!ctx) throw new Error('useAccessibility must be used inside AccessibilityProvider')
  return ctx
}
