/** Optional, non-sensitive onboarding goal selection. */
export function GoalPicker({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <div className="mood-options" style={{ margin: '32px 0' }}>{['Make space to reflect', 'Find calmer moments', 'Understand my feelings', 'Just look around'].map(item => <button key={item} className={`mood-option ${value === item ? 'selected' : ''}`} onClick={() => onChange(item)}>{item}</button>)}</div>
}
