import { Send } from 'lucide-react'

/** Controlled chat composer with a single send action. */
export function ChatComposer({ value, onChange, onSubmit }: { value: string; onChange: (value: string) => void; onSubmit: () => void }) {
  return <form className="composer" onSubmit={event => { event.preventDefault(); onSubmit() }}><input value={value} onChange={event => onChange(event.target.value)} placeholder="Write what’s on your mind..." aria-label="Message Baymax" /><button className="send-button" type="submit" aria-label="Send message"><Send size={18} /></button></form>
}
