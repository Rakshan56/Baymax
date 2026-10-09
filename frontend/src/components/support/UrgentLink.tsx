import { ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

/** Keeps urgent-support access discoverable throughout the application. */
export function UrgentLink() { return <Link className="urgent-link" to="/support"><ShieldCheck size={15} /> Need urgent support?</Link> }
