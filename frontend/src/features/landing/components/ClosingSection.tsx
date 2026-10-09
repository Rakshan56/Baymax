import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Mascot } from '../../../components/brand/Mascot'

/** Final invitation and compact public footer. */
export function ClosingSection() {
  return <><section className="closing container"><Mascot small /><p className="eyebrow">Whenever you're ready</p><h2>You can start small.</h2><Link className="button" to="/signup">Get started <ArrowRight size={17} /></Link></section><footer className="footer container"><div><Link className="logo" to="/"><Mascot small /><span>baymax</span></Link></div><div><Link to="/learn">Learning centre</Link><Link to="/support">Find support</Link><Link to="/settings">Privacy</Link><a href="mailto:hello@baymax.example">Contact</a></div><small>© 2025 Baymax. A gentle tool, not a replacement for care.</small></footer></>
}
