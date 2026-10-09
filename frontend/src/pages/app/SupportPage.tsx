import { BookOpen, Heart, ShieldCheck, UserRound } from 'lucide-react'
import { PageTitle } from '../../components/common/PageTitle'
import { SupportCard } from '../../features/support/components/SupportCard'

/** Coordinates urgent guidance and reusable support options. */
export function SupportPage() {
  const cards = [{ title: 'Talk to a professional', text: 'A counsellor, psychologist, or doctor can help you understand what you are experiencing and explore options.', icon: UserRound }, { title: 'Start with someone you trust', text: 'A friend, family member, mentor, or campus wellbeing team can be a meaningful first step.', icon: Heart }, { title: 'Learn at your pace', text: 'Explore evidence-informed information, while remembering that general content is not personal care.', icon: BookOpen }]
  return <div className="page-content support-page"><PageTitle eyebrow="Support beyond Baymax" title="You do not have to do this alone." description="Baymax is not an emergency response service. Choose the kind of support that feels right for you." /><div className="urgent-card"><ShieldCheck size={22} /><div><h2>Are you in immediate danger?</h2><p>If you may hurt yourself or someone else, contact your local emergency service now or go to the nearest emergency department. If you can, tell someone nearby and stay with them.</p><small>Local crisis contacts vary. Baymax does not place calls or dispatch help.</small></div></div><div className="support-grid">{cards.map(card => <SupportCard key={card.title} {...card} />)}</div><p className="reference-note">For India-specific verified services, connect this directory to a maintained provider list before publishing. No phone numbers are invented in this demo.</p></div>
}
