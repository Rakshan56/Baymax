import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageTitle } from '../../components/common/PageTitle'
import { clearDemoUser } from '../../services/localStorage'
import { clearMoodEntries } from '../../features/mood'
import { LogoutButton } from '../../features/settings/components/LogoutButton'
import { PreferencesForm } from '../../features/settings/components/PreferencesForm'
import { PrivacyControls } from '../../features/settings/components/PrivacyControls'

/** Coordinates settings state and destructive actions. */
export function SettingsPage() {
  const navigate = useNavigate(); const [saved, setSaved] = useState(false)
  function logout() { clearDemoUser(); navigate('/') }
  function clearHistory() { clearMoodEntries(); window.alert('Local mood history cleared from this browser.') }
  return <div className="page-content settings-page"><PageTitle eyebrow="Your space" title="Settings" description="Control what stays in this browser and how Baymax speaks with you." /><PreferencesForm saved={saved} onSave={() => { setSaved(true); window.setTimeout(() => setSaved(false), 2500) }} /><PrivacyControls onClear={clearHistory} /><LogoutButton onLogout={logout} /></div>
}
