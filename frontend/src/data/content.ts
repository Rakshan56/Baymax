import { BookOpen, Brain, Heart, Leaf, Moon, PenLine, Sparkles, Wind } from 'lucide-react'
import type { Mood } from '../types'
import type { Activity } from '../features/toolkit/types'
import type { Article } from '../features/learning/types'

/** Mood choices used by the public preview and private check-in form. */
export const moods: { label: Mood; icon: string; tone: string }[] = [
  { label: 'Pretty good', icon: '☀', tone: 'mint' }, { label: 'Just okay', icon: '◔', tone: 'blue' },
  { label: 'A little low', icon: '◒', tone: 'lavender' }, { label: 'Overwhelmed', icon: '≋', tone: 'peach' },
]

/** Starter prompts keep the demo companion welcoming before a real AI service is connected. */
export const starterPrompts = ["I've been feeling stressed about college.", "I don't really know how I feel.", "Can you help me calm down?", "I just need someone to listen."]
export const demoReplies = [
  "That sounds like a lot to carry. Thank you for putting it into words. What part of today feels heaviest right now?",
  "It’s okay not to have a neat answer. We can sit with the uncertainty together, or try a tiny grounding step if that would feel useful.",
  "Let’s take this one breath at a time. Try noticing one thing you can see, one sound you can hear, and one place your body feels supported.",
]

/** Learning cards are intentionally local demo content until a reviewed content API exists. */
export const articles: Article[] = [
  { slug: 'academic-stress', category: 'Academic stress', title: 'When college feels like too much', summary: 'A gentler way to understand pressure, expectations, and the space between deadlines.', icon: BookOpen },
  { slug: 'understanding-anxiety', category: 'Anxiety', title: 'Understanding anxious feelings', summary: 'Learn how worry can show up in your body, thoughts, and everyday choices.', icon: Brain },
  { slug: 'burnout', category: 'Burnout', title: 'The quiet signs of burnout', summary: 'Small signals that your mind and body may need rest, support, or a different rhythm.', icon: Moon },
  { slug: 'sleep', category: 'Sleep', title: 'A softer evening routine', summary: 'Practical, low-pressure ideas for making room for rest.', icon: Sparkles },
]

/** Toolkit catalog for the current local MVP. */
export const activities: Activity[] = [
  { title: 'Box breathing', type: 'Breathe', duration: '2 min', description: 'A simple rhythm to help you pause and notice the present moment.', icon: Wind, tone: 'blue' },
  { title: '5-4-3-2-1 grounding', type: 'Ground', duration: '5 min', description: 'Use your senses to gently reconnect with where you are.', icon: Leaf, tone: 'mint' },
  { title: 'A page for your thoughts', type: 'Journal', duration: '5 min', description: 'A private prompt to make a little room for what is on your mind.', icon: PenLine, tone: 'lavender' },
  { title: 'Unwind your shoulders', type: 'Relax', duration: '3 min', description: 'A short body scan for releasing a little held tension.', icon: Heart, tone: 'peach' },
]

export const moodMessages: Record<Mood, string> = {
  'Pretty good': 'Keep a little of that light with you.',
  'Just okay': 'Just okay is a perfectly valid place to be.',
  'A little low': 'You do not have to carry it all by yourself.',
  Overwhelmed: 'Let’s make the next moment a little smaller.',
}
