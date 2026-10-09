import { ArrowRight, Check, Clock3 } from 'lucide-react'
import type { Activity } from '../types'

/** One toolkit activity card with isolated expand/finish presentation state. */
export function ActivityCard({ activity, active, onToggle, onFinish }: { activity: Activity; active: boolean; onToggle: () => void; onFinish: () => void }) {
  const Icon = activity.icon
  return <article className={`activity-card ${activity.tone}`}><div className="activity-top"><span className="feature-icon"><Icon size={21} /></span><span className="duration"><Clock3 size={14} /> {activity.duration}</span></div><p className="eyebrow">{activity.type}</p><h2>{activity.title}</h2><p>{activity.description}</p><button className="text-link" onClick={onToggle}>{active ? 'Close steps' : 'Start gently'} <ArrowRight size={15} /></button>{active && <div className="steps"><strong>Try this:</strong><ol><li>Find a comfortable position.</li><li>Notice what is here without judging it.</li><li>When you are ready, return to your surroundings.</li></ol><button className="button button-small" onClick={onFinish}>Finish <Check size={14} /></button></div>}</article>
}
