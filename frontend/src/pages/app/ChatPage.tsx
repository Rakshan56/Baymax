import { useState } from 'react'
import { LockKeyhole, Sparkles } from 'lucide-react'
import { PageTitle } from '../../components/common/PageTitle'
import { ChatComposer } from '../../features/chat/components/ChatComposer'
import { ChatMessageList } from '../../features/chat/components/ChatMessageList'
import { StarterPrompts } from '../../features/chat/components/StarterPrompts'
import { demoReplies } from '../../features/chat'
import type { ChatMessage } from '../../types'

/** Coordinates chat state while keeping visual pieces independently editable. */
export function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([{ from: 'baymax', text: "Hi, I'm Baymax. I'm here to listen. You can start anywhere — there is no perfect way to say how you're feeling." }])
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  function send(value = text) {
    if (!value.trim() || loading) return
    setMessages(current => [...current, { from: 'you', text: value }]); setText(''); setLoading(true)
    window.setTimeout(() => { setMessages(current => [...current, { from: 'baymax', text: demoReplies[current.length % demoReplies.length] }]); setLoading(false) }, 650)
  }
  return <div className="page-content chat-page"><PageTitle eyebrow="A private conversation" title="What’s on your mind?" action={<button className="button button-ghost" onClick={() => setMessages([{ from: 'baymax', text: "A fresh page. I'm here whenever you're ready." }])}>New conversation</button>} /><div className="demo-banner"><Sparkles size={16} /><span><strong>Demo companion</strong> — responses are examples from local app logic. Connect a protected backend to enable a live AI service.</span></div><ChatMessageList messages={messages} loading={loading} /><StarterPrompts onSelect={send} /><ChatComposer value={text} onChange={setText} onSubmit={() => send()} /><p className="privacy-note"><LockKeyhole size={13} /> Demo conversations are not sent anywhere and stay in this browser.</p></div>
}
