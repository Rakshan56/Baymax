import { starterPrompts } from '../index'

/** Quick prompts that can be sent without typing. */
export function StarterPrompts({ onSelect }: { onSelect: (prompt: string) => void }) {
  return <div className="starter-prompts">{starterPrompts.map(prompt => <button key={prompt} onClick={() => onSelect(prompt)}>{prompt}</button>)}</div>
}
