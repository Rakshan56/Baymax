import type { Mood } from '../../types'
import { moods } from '../../features/mood'

/** Accessible reusable mood selector shared by public and private check-ins. */
export function MoodOptions({ value, onChange }: { value: Mood | null; onChange: (mood: Mood) => void }) {
  return <div className="mood-options">{moods.map(item => <button type="button" key={item.label} className={`mood-option ${value === item.label ? 'selected' : ''}`} onClick={() => onChange(item.label)}><span className={`mood-icon ${item.tone}`}>{item.icon}</span><span>{item.label}</span></button>)}</div>
}
