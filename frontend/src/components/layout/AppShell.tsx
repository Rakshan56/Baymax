import type { ReactNode } from 'react'
import { BookOpen, Brain, Heart, Home, Leaf, Menu, MessageCircle, ShieldCheck, UserRound, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Logo } from '../brand/Logo'
import { UrgentLink } from '../support/UrgentLink'

/** Authenticated application shell: desktop sidebar, mobile bottom navigation, and urgent support link. */
export function AppShell({ children }: { children: ReactNode }) {
  const location = useLocation(); const [sidebar, setSidebar] = useState(false)
  const items = [{ to: '/dashboard', label: 'Home', icon: Home }, { to: '/chat', label: 'Chat', icon: MessageCircle }, { to: '/mood', label: 'Mood', icon: Heart }, { to: '/toolkit', label: 'Tools', icon: Leaf }, { to: '/settings', label: 'Profile', icon: UserRound }]
  const extra = [{ to: '/assessments', label: 'Assessments', icon: Brain }, { to: '/learn', label: 'Learn', icon: BookOpen }, { to: '/support', label: 'Find support', icon: ShieldCheck }]
  return <div className="app-layout"><aside className={sidebar ? 'sidebar open' : 'sidebar'}><div className="sidebar-top"><Logo /><button className="icon-button close-sidebar" onClick={() => setSidebar(false)} aria-label="Close navigation"><X size={18} /></button></div><nav className="side-nav">{[...items, ...extra].map(({ to, label, icon: Icon }, index) => <span key={to}>{index === items.length && <div className="nav-divider" />}<NavLink to={to}><Icon size={18} />{label}</NavLink></span>)}</nav><div className="side-footer"><UrgentLink /><small>Baymax is not an emergency service.</small></div></aside><main className="app-main"><div className="app-topbar"><button className="icon-button open-sidebar" onClick={() => setSidebar(true)} aria-label="Open navigation"><Menu size={20} /></button><span className="crumb">{location.pathname === '/dashboard' ? 'A quiet place to check in' : 'baymax'}</span><UrgentLink /></div>{children}</main><nav className="bottom-nav">{items.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to}><Icon size={18} /><span>{label}</span></NavLink>)}</nav></div>
}
