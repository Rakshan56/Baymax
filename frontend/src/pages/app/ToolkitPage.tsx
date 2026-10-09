import { useState } from 'react'
import { Search } from 'lucide-react'
import { PageTitle } from '../../components/common/PageTitle'
import { activities } from '../../features/toolkit'
import { ActivityCard } from '../../features/toolkit/components/ActivityCard'

/** Coordinates toolkit filtering and active activity state. */
export function ToolkitPage() {
  const [query, setQuery] = useState(''); const [active, setActive] = useState<string | null>(null)
  const filtered = activities.filter(item => `${item.title} ${item.type}`.toLowerCase().includes(query.toLowerCase()))
  return <div className="page-content"><PageTitle eyebrow="Tools for this moment" title="Wellness toolkit" description="Small practices, with no pressure to do them perfectly." /><div className="search-box"><Search size={17} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search breathing, journaling..." aria-label="Search toolkit" /></div><div className="activity-grid">{filtered.map(activity => <ActivityCard key={activity.title} activity={activity} active={active === activity.title} onToggle={() => setActive(active === activity.title ? null : activity.title)} onFinish={() => setActive(null)} />)}</div>{filtered.length === 0 && <div className="empty-state"><Search size={22} /><h3>No tools found.</h3><p>Try a different word or browse all of the toolkit.</p></div>}</div>
}
