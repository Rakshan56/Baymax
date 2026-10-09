import { readDemoUser, readMoodEntries } from '../../services/localStorage'
import { DashboardFeatureCards } from '../../features/dashboard/components/DashboardFeatureCards'
import { SmallSteps } from '../../features/dashboard/components/SmallSteps'
import { WelcomeHeader } from '../../features/dashboard/components/WelcomeHeader'

/** Composes dashboard feature components and owns only page-level data loading. */
export function DashboardPage() {
  const entries = readMoodEntries()
  const greeting = readDemoUser().email?.split('@')[0] || 'there'
  return <div className="page-content"><WelcomeHeader name={greeting} /><DashboardFeatureCards hasEntries={entries.length > 0} /><SmallSteps /></div>
}
