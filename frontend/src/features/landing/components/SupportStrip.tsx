import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

/** Persistent explanation of Baymax limitations and professional support. */
export function SupportStrip() {
  return <section className="support-strip container"><div className="support-icon"><ShieldCheck /></div><div><p className="eyebrow">Support beyond the screen</p><h2>Some things are easier with a little help.</h2><p className="muted">Baymax can offer a listening space and helpful information, but it cannot replace professional care or respond to an emergency.</p></div><Link className="button button-ghost" to="/support">Find support <ArrowRight size={16} /></Link></section>
}
