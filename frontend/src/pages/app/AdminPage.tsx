import { ShieldCheck } from 'lucide-react'

/** Explicit unavailable state until real server-side admin authorization exists. */
export function AdminPage() {
  return <div className="page-content"><div className="page-title"><p className="eyebrow">Restricted area</p><h1>Admin dashboard</h1></div><div className="urgent-card"><ShieldCheck size={22} /><div><h2>Not connected</h2><p>Server-side authentication, roles, audit logs, and privacy-preserving aggregate analytics must be configured before this area can show data.</p></div></div></div>
}
