import { Link } from 'react-router-dom'
import { Mascot } from './Mascot'

/** Brand mark shared by public navigation, authenticated navigation, and auth pages. */
export function Logo() { return <Link className="logo" to="/"><Mascot small /><span>baymax</span></Link> }
