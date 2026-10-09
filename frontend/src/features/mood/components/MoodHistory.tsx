import { Heart, X } from 'lucide-react'
import type { MoodEntry } from '../../../types'

/** Mood history list with empty state and user-owned delete action. */
export function MoodHistory({ entries, onRemove }: { entries: MoodEntry[]; onRemove: (id: number) => void }) {
  return <section className="history-section"><div className="section-heading compact"><h2>Recent reflections</h2><span className="muted">{entries.length} saved</span></div>{entries.length === 0 ? <div className="empty-state"><Heart size={22} /><h3>Your history starts here.</h3><p>Saved check-ins will appear privately on this device.</p></div> : <div className="entry-list">{entries.map(entry => <div className="entry" key={entry.id}><span className="mood-dot" /><div><strong>{entry.mood}</strong><small>{entry.date}{entry.note && ` · ${entry.note}`}</small></div><button className="icon-button" onClick={() => onRemove(entry.id)} aria-label={`Delete ${entry.date} entry`}><X size={16} /></button></div>)}</div>}</section>
}
