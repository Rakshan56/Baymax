import { PublicHeader } from '../../components/layout/PublicHeader'
import { ClosingSection } from '../../features/landing/components/ClosingSection'
import { HeroSection } from '../../features/landing/components/HeroSection'
import { MoodPreview } from '../../features/landing/components/MoodPreview'
import { PathwaysSection } from '../../features/landing/components/PathwaysSection'
import { StepsSection } from '../../features/landing/components/StepsSection'
import { SupportStrip } from '../../features/landing/components/SupportStrip'

/** Composes the public landing feature from independently editable sections. */
export function LandingPage() {
  return <div className="landing"><PublicHeader /><HeroSection /><MoodPreview /><PathwaysSection /><StepsSection /><SupportStrip /><ClosingSection /></div>
}
