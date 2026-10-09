import type { LucideIcon } from 'lucide-react'

/** Reusable support option card without fabricated provider details. */
export function SupportCard({ title, text, icon: Icon }: { title: string; text: string; icon: LucideIcon }) {
  return <div className="support-card"><Icon size={22} /><h2>{title}</h2><p>{text}</p></div>
}
