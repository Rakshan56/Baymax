import { ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MoodOptions } from '../../../components/mood/MoodOptions'
import { moodMessages } from '../../mood'
import type { Mood } from '../../../types'

/** Public mood preview. It deliberately keeps the selection ephemeral. */
export function MoodPreview() {
  const [mood, setMood] = useState<Mood | null>(null)
  return <section className="mood-preview container paper-card"><div><p className="eyebrow">A tiny check-in</p><h2>How are things feeling today?</h2><p className="muted">No right answer. Just a moment to notice.</p></div><MoodOptions value={mood} onChange={setMood} />{mood && <div className="preview-message"><Check size={17} /> {moodMessages[mood]} <Link to="/signup">Continue privately <ArrowRight size={14} /></Link></div>}</section>
}
