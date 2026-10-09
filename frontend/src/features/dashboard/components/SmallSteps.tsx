import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { activities } from '../../toolkit'

/** Dashboard toolkit shortcuts and daily supportive note. */
export function SmallSteps() {
  return <div className="dashboard-lower"><div><div className="section-heading compact"><h2>Try a small step</h2><Link to="/toolkit">See all <ArrowRight size={15} /></Link></div><div className="mini-list">{activities.slice(0, 2).map(item => <Link to="/toolkit" className="mini-item" key={item.title}><span className={`mini-icon ${item.tone}`}><item.icon size={18} /></span><span><strong>{item.title}</strong><small>{item.duration} · {item.type}</small></span><ChevronRight size={16} /></Link>)}</div></div><div className="quote-card"><Sparkles size={18} /><p>“You are allowed to take up space while you figure things out.”</p><small>A note for today</small></div></div>
}
