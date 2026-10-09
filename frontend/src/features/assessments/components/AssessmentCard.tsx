import { ArrowRight, Clock3 } from 'lucide-react'

/** Individual assessment catalogue card. */
export function AssessmentCard({ name, title, text, time, selected, onSelect }: { name: string; title: string; text: string; time: string; selected: boolean; onSelect: () => void }) {
  return <article className="assessment-card"><span className="assessment-number">{name}</span><h2>{title}</h2><p>{text}</p><span className="duration"><Clock3 size={14} /> {time}</span><button className="button button-ghost" onClick={onSelect}>{selected ? 'Coming soon' : 'Read about it'} <ArrowRight size={15} /></button></article>
}
