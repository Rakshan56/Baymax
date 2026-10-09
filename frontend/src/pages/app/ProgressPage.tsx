import { ArrowRight, Heart, Leaf, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { readMoodEntries } from '../../services/localStorage'
import { PageTitle } from '../../components/common/PageTitle'

/** Personal progress view built from the user-owned local mood history. */
export function ProgressPage() {
  const entries = readMoodEntries()
  return <div className="page-content"><PageTitle eyebrow="Your patterns, gently" title="Progress" description="A simple view of what you have chosen to save. Nothing here is a clinical measure." /><div className="dashboard-grid"><div className="feature-card mint"><div className="feature-icon"><Heart /></div><p className="eyebrow">Check-ins saved</p><h2>{entries.length}</h2><p>Your private mood reflections on this device.</p></div><div className="feature-card lavender"><div className="feature-icon"><Leaf /></div><p className="eyebrow">A next step</p><h2>Keep it gentle</h2><p>Patterns can be useful, but they do not define your wellbeing.</p></div></div><div className="history-section" style={{ marginTop: 45 }}><div className="section-heading compact"><h2>Reflection history</h2><Link to="/mood">Add a check-in <ArrowRight size={15} /></Link></div>{entries.length === 0 ? <div className="empty-state"><Sparkles size={22} /><h3>No saved history yet.</h3><p>When you choose to save a mood, it will appear here.</p></div> : <div className="entry-list">{entries.slice(0, 8).map(entry => <div className="entry" key={entry.id}><span className="mood-dot" /><div><strong>{entry.mood}</strong><small>{entry.date}{entry.note && ` · ${entry.note}`}</small></div></div>)}</div>}</div></div>
}
