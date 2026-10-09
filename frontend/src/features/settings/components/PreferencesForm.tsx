import { Check } from 'lucide-react'

/** Controlled presentation of communication and language preferences. */
export function PreferencesForm({ saved, onSave }: { saved: boolean; onSave: () => void }) {
  return <section className="settings-section"><div><h2>Preferences</h2><p>These are demo preferences stored locally.</p></div><label>Communication style<select defaultValue="gentle"><option>Gentle and reflective</option><option>Clear and practical</option><option>Brief and quiet</option></select></label><label>Language<select defaultValue="English"><option>English</option><option>Hindi</option></select></label><button className="button button-small" onClick={onSave}>Save preferences <Check size={15} /></button>{saved && <span className="success-inline" role="status">Saved</span>}</section>
}
