import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/** Editorial explanation of gradual progress with explicitly illustrative chart data. */
export function StepsSection() {
  const bars = [35, 55, 42, 70, 52, 63, 78]
  return <section className="steps-section"><div className="container two-col"><div><p className="eyebrow">Small steps over time</p><h2>You don't have to change everything overnight.</h2><p className="muted">Reflection is not a race. Baymax helps you notice patterns in your mood, make space for your thoughts, and choose a next step that feels manageable.</p><Link className="text-link" to="/signup">Start your private journal <ArrowRight size={16} /></Link></div><div className="chart-card"><div className="chart-header"><span>your week, gently</span><small>illustrative</small></div><div className="chart">{bars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div><div className="chart-days">{['M','T','W','T','F','S','S'].map((day, index) => <span key={index}>{day}</span>)}</div></div></div></section>
}
