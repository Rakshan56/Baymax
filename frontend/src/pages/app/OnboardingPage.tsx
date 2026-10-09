import { useState } from 'react'
import { ArrowRight, LockKeyhole } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { GoalPicker } from '../../features/onboarding/components/GoalPicker'

/** Optional onboarding preference step; only minimal non-sensitive information is requested. */
export function OnboardingPage() {
  const navigate = useNavigate(); const [goal, setGoal] = useState('')
  return <div className="page-content article-page"><p className="eyebrow">A short optional start</p><h1>What would feel useful?</h1><p className="article-lede">Choose one small intention, or skip this for now. You can change it later.</p><GoalPicker value={goal} onChange={setGoal} /><div className="demo-banner"><LockKeyhole size={16} /><span>This preference is saved only in this browser in the MVP. You do not need to share a health history to begin.</span></div><button className="button" onClick={() => navigate('/dashboard')}>{goal ? 'Save and continue' : 'Skip for now'} <ArrowRight size={16} /></button></div>
}
