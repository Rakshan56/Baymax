import { Mascot } from '../../../components/brand/Mascot'
import type { ChatMessage } from '../../../types'

/** Renders conversation history and the local typing state. */
export function ChatMessageList({ messages, loading }: { messages: ChatMessage[]; loading: boolean }) {
  return <div className="chat-window">{messages.map((message, index) => <div className={`chat-message ${message.from}`} key={index}>{message.from === 'baymax' && <Mascot small />}<div><p>{message.text}</p><small>{message.from === 'baymax' ? 'baymax' : 'you'}</small></div></div>)}{loading && <div className="typing"><span /><span /><span /> Baymax is thinking</div>}</div>
}
