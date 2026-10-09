import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'

/** Public navigation with a responsive mobile menu. */
export function PublicHeader() {
  const [open, setOpen] = useState(false)
  return <header className="public-header"><Logo /><nav className={open ? 'mobile-open' : ''}>
    <a href="#approach">Our approach</a><Link to="/learn">Resources</Link><Link to="/login">Log in</Link>
    <Link className="button button-small" to="/signup">Get started <ArrowRight size={15} /></Link>
  </nav><button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></header>
}
