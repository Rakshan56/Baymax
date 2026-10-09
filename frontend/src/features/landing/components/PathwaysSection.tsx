import { ArrowRight, BookOpen, MessageCircle, Wind } from 'lucide-react'
import { Link } from 'react-router-dom'

/** The three core product pathways presented on the landing page. */
export function PathwaysSection() {
  const pathways = [{ title: 'Let it out.', text: 'A calm, non-judgmental companion for thoughts that are hard to say out loud.', to: '/chat', tone: 'lavender', icon: MessageCircle }, { title: 'Find a little calm.', text: 'Breathing, grounding, and journaling tools for the moments you need them.', to: '/toolkit', tone: 'mint', icon: Wind }, { title: 'Get to know yourself.', text: 'Friendly, evidence-informed reading for making sense of what you feel.', to: '/learn', tone: 'peach', icon: BookOpen }]
  return <section id="approach" className="pathways container"><div className="section-heading"><p className="eyebrow">Three ways in</p><h2>Meet yourself where you are.</h2></div><div className="pathway-grid">{pathways.map(({ title, text, to, tone, icon: Icon }) => <div className={`pathway ${tone}`} key={title}><Icon size={22} /><h3>{title}</h3><p>{text}</p><Link to={to}>Explore <ArrowRight size={15} /></Link></div>)}</div></section>
}
