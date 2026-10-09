import { ArrowRight, PenLine, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Mascot } from '../../../components/brand/Mascot'

/** Landing hero: product promise, primary CTA, and the journal illustration. */
export function HeroSection() {
  return <section className="hero container"><div className="hero-copy"><p className="eyebrow"><Sparkles size={15} /> A quiet space for your wellbeing</p><h1>You don't have to figure everything out today.</h1><p className="hero-lede">Some days feel lighter than others. Baymax gives you a gentle space to pause, put your feelings into words, and take one small step at a time.</p><Link className="button" to="/signup">Come talk to Baymax <ArrowRight size={17} /></Link><p className="hand-note">One little step is still a step.</p></div><div className="hero-art"><div className="sun-ring" /><Mascot /><div className="journal"><PenLine size={18} /><span>today, I can...</span><i /></div></div></section>
}
