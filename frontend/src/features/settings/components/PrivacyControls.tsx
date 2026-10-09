import { LockKeyhole } from 'lucide-react'

/** Local privacy controls isolated from the settings page coordinator. */
export function PrivacyControls({ onClear }: { onClear: () => void }) {
  return <section className="settings-section privacy-section"><LockKeyhole size={21} /><div><h2>Privacy and demo storage</h2><p>Your mood entries and demo conversations are kept in your browser’s local storage. There is no connected account, server, AI provider, or professional monitoring in this MVP.</p><button className="text-link" onClick={onClear}>Clear mood history</button></div></section>
}
