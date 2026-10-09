import { useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import { PageTitle } from '../../components/common/PageTitle'
import { AssessmentCard } from '../../features/assessments/components/AssessmentCard'

/** Coordinates assessment selection; verified questionnaires remain intentionally disabled. */
export function AssessmentsPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const assessments = [{ name: 'PHQ-9', title: 'Mood questionnaire', text: 'A validated set of questions about mood and daily life over the past two weeks.', time: '3–5 min' }, { name: 'GAD-7', title: 'Worry questionnaire', text: 'A validated set of questions about anxiety and worry over the past two weeks.', time: '2–4 min' }]
  return <div className="page-content"><PageTitle eyebrow="Self-reflection" title="Check in with yourself." description="These questionnaires are not diagnoses. They can help you decide whether talking to a professional might be useful." /><div className="assessment-grid">{assessments.map(item => <AssessmentCard key={item.name} {...item} selected={selected === item.name} onSelect={() => setSelected(item.name)} />)}</div><div className="demo-banner"><ShieldCheck size={16} /><span><strong>Carefully scoped MVP:</strong> questionnaire flows are intentionally not enabled until verified standard wording, scoring, consent, and safety handling are connected.</span></div></div>
}
