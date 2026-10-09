/** Domain types shared by feature pages and local services. */
export type Mood = 'Pretty good' | 'Just okay' | 'A little low' | 'Overwhelmed'
export type MoodEntry = { id: number; mood: Mood; note: string; tags: string[]; date: string }
export type ChatMessage = { from: 'baymax' | 'you'; text: string }
export type IconComponent = React.ComponentType<{ size?: number }>
