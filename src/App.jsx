import { Routes, Route, Navigate } from 'react-router-dom'
import { AccessibilityProvider, useAccessibility } from './context/AccessibilityContext'
import { StudyProvider } from './context/StudyContext'
import { UserProvider, useUser } from './context/UserContext'
import Shell from './components/Shell'
import Onboarding from './pages/Onboarding'
import Hub from './pages/Hub'
import FocusSession from './pages/FocusSession'
import BreakScreen from './pages/BreakScreen'
import Blurt from './pages/Blurt'
import UCATHub from './pages/UCATHub'
import UCATSection from './pages/UCATSection'
import VRPassages from './pages/VRPassages'
import DMCourse from './pages/DMCourse'
import DMModule from './pages/DMModule'
import StudyPlan from './pages/StudyPlan'
import Jarvis from './pages/Jarvis'
import MMIPractice from './pages/MMIPractice'
import EthicsHelper from './pages/EthicsHelper'
import Subscription from './pages/Subscription'
import Clarity from './pages/Clarity'
import Flashcards from './pages/Flashcards'
import Settings from './pages/Settings'
import Progress from './pages/Progress'

function Gate() {
  const { settings } = useAccessibility()
  const { user } = useUser()
  if (!settings.profile || !user.learningStyle) {
    return (
      <Routes>
        <Route path="*" element={<Onboarding />} />
      </Routes>
    )
  }
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/focus" element={<FocusSession />} />
        <Route path="/break" element={<BreakScreen />} />
        <Route path="/blurt" element={<Blurt />} />
        <Route path="/ucat" element={<UCATHub />} />
        <Route path="/ucat/vr-passages" element={<VRPassages />} />
        <Route path="/ucat/dm-course" element={<DMCourse />} />
        <Route path="/ucat/dm-course/:moduleId" element={<DMModule />} />
        <Route path="/ucat/:section" element={<UCATSection />} />
        <Route path="/study-plan" element={<StudyPlan />} />
        <Route path="/jarvis" element={<Jarvis />} />
        <Route path="/mmi" element={<MMIPractice />} />
        <Route path="/ethics" element={<EthicsHelper />} />
        <Route path="/subscribe" element={<Subscription />} />
        <Route path="/clarity" element={<Clarity />} />
        <Route path="/study/:deckId" element={<Flashcards />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Shell>
  )
}

export default function App() {
  return (
    <AccessibilityProvider>
      <UserProvider>
        <StudyProvider>
          <Gate />
        </StudyProvider>
      </UserProvider>
    </AccessibilityProvider>
  )
}
