import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { hasDemoUser } from '../../services/localStorage'
import { getCurrentUser, isApiConfigured } from '../../services/api'

/** Client-side demo guard; replace with server session validation when the backend is added. */
export function ProtectedRoute({ children }: { children: ReactNode }) {
  const location = useLocation()
  const [authenticated, setAuthenticated] = useState<boolean | null>(isApiConfigured ? null : hasDemoUser())
  useEffect(() => {
    if (!isApiConfigured) return
    getCurrentUser().then(() => setAuthenticated(true)).catch(() => setAuthenticated(false))
  }, [])
  if (authenticated === null) return <div className="redirect-card">Checking your Baymax session…</div>
  if (authenticated) return <>{children}</>
  return <Link to={`/login?next=${encodeURIComponent(location.pathname)}`} className="redirect-card">Please log in to continue <ArrowRight size={17} /></Link>
}
