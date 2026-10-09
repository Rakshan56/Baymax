import { useState } from 'react'
import { Check } from 'lucide-react'
import { PageTitle } from '../../components/common/PageTitle'
import { MoodCheckInForm } from '../../features/mood/components/MoodCheckInForm'
import { MoodHistory } from '../../features/mood/components/MoodHistory'
import { readMoodEntries, saveMoodEntries } from '../../features/mood'
import type { Mood } from '../../types'

/** Coordinates mood persistence while form and history stay independently editable. */
export function MoodPage() {
  const [entries, setEntries] = useState(readMoodEntries()); const [mood, setMood] = useState<Mood | null>(null); const [note, setNote] = useState(''); const [saved, setSaved] = useState(false)
  function save() { if (!mood) return; const entry = { id: Date.now(), mood, note, tags: [], date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) }; const next = [entry, ...entries]; setEntries(next); saveMoodEntries(next); setMood(null); setNote(''); setSaved(true); window.setTimeout(() => setSaved(false), 3000) }
  function remove(id: number) { const next = entries.filter(entry => entry.id !== id); setEntries(next); saveMoodEntries(next) }
  return <div className="page-content"><PageTitle eyebrow="Your private journal" title="Mood check-in" description="Not a diagnosis — just a moment to notice." />{saved && <div className="success-message" role="status"><Check size={17} /> Saved privately in this browser.</div>}<MoodCheckInForm mood={mood} note={note} onMoodChange={setMood} onNoteChange={setNote} onSave={save} /><MoodHistory entries={entries} onRemove={remove} /></div>
}
