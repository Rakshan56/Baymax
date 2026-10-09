import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { LandingPage } from './pages/public/LandingPage'
import { AuthPage } from './pages/auth/AuthPage'
import { AppShell } from './components/layout/AppShell'
import { ProtectedRoute } from './components/routing/ProtectedRoute'
import { DashboardPage } from './pages/app/DashboardPage'
import { ChatPage } from './pages/app/ChatPage'
import { MoodPage } from './pages/app/MoodPage'
import { ToolkitPage } from './pages/app/ToolkitPage'
import { LearnPage } from './pages/app/LearnPage'
import { ArticlePage } from './pages/app/ArticlePage'
import { AssessmentsPage } from './pages/app/AssessmentsPage'
import { SupportPage } from './pages/app/SupportPage'
import { SettingsPage } from './pages/app/SettingsPage'
import { OnboardingPage } from './pages/app/OnboardingPage'
import { ProgressPage } from './pages/app/ProgressPage'
import { AdminPage } from './pages/app/AdminPage'

/** Defines the private application routes in one place for easy auditing. */
function PrivateRoutes() {
  return <ProtectedRoute><AppShell><Routes>
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/onboarding" element={<OnboardingPage />} />
    <Route path="/chat" element={<ChatPage />} />
    <Route path="/mood" element={<MoodPage />} />
    <Route path="/progress" element={<ProgressPage />} />
    <Route path="/toolkit" element={<ToolkitPage />} />
    <Route path="/learn" element={<LearnPage />} />
    <Route path="/learn/:slug" element={<ArticlePage />} />
    <Route path="/assessments" element={<AssessmentsPage />} />
    <Route path="/support" element={<SupportPage />} />
    <Route path="/settings" element={<SettingsPage />} />
    <Route path="/admin" element={<AdminPage />} />
  </Routes></AppShell></ProtectedRoute>
}

/** Sets a useful document title without coupling pages to routing internals. */
function DocumentTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = pathname === '/' ? 'baymax — take one small step' : `baymax — ${pathname.slice(1).split('/')[0]}`
  }, [pathname])
  return null
}

export default function App() {
  return <><DocumentTitle /><Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<AuthPage />} />
    <Route path="/signup" element={<AuthPage signup />} />
    <Route path="*" element={<PrivateRoutes />} />
  </Routes></>
}
