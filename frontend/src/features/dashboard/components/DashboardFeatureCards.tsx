import { ArrowRight, Heart, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

/** Primary dashboard shortcuts kept separate so cards can evolve independently. */
export function DashboardFeatureCards({ hasEntries }: { hasEntries: boolean }) {
  return <div className="dashboard-grid"><Link to="/chat" className="feature-card lavender"><div className="feature-icon"><MessageCircle /></div><p className="eyebrow">Your companion</p><h2>Talk to Baymax</h2><p>Say what is on your mind, without needing to have it all figured out.</p><span className="card-link">Open chat <ArrowRight size={15} /></span></Link><Link to="/mood" className="feature-card blue"><div className="feature-icon"><Heart /></div><p className="eyebrow">A gentle check-in</p><h2>How are you feeling?</h2><p>{hasEntries ? 'Add a note to your mood or look back at your recent reflections.' : 'A private moment to notice what is here today.'}</p><span className="card-link">Check in <ArrowRight size={15} /></span></Link></div>
}
