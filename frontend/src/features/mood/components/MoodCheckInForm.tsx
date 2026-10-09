import { Check } from 'lucide-react'
import { MoodOptions } from '../../../components/mood/MoodOptions'
import type { Mood } from '../../../types'

/** Mood form component: selection, private note, and save action. */
export function MoodCheckInForm({ mood, note, onMoodChange, onNoteChange, onSave }: { mood: Mood | null; note: string; onMoodChange: (mood: Mood) => void; onNoteChange: (note: string) => void; onSave: () => void }) {
  return <section className="checkin-card paper-card"><h2>How are things feeling today?</h2><MoodOptions value={mood} onChange={onMoodChange} /><label className="journal-label">Anything you want to remember? <span>optional</span><textarea value={note} onChange={event => onNoteChange(event.target.value)} placeholder="A word, a sentence, or nothing at all..." /></label><button className="button" onClick={onSave} disabled={!mood}>Save check-in <Check size={16} /></button></section>
}
