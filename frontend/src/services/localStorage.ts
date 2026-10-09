import type { MoodEntry } from '../types'

const MOODS_KEY = 'baymax-moods'
const USER_KEY = 'baymax-user'

/** Reads demo mood data safely; malformed browser data becomes an empty history. */
export function readMoodEntries(): MoodEntry[] {
  try { return JSON.parse(localStorage.getItem(MOODS_KEY) || '[]') as MoodEntry[] } catch { return [] }
}
/** Saves the current demo mood history in browser storage. */
export function saveMoodEntries(entries: MoodEntry[]) { localStorage.setItem(MOODS_KEY, JSON.stringify(entries)) }
/** Reads the demo account identity used by the current frontend-only MVP. */
export function readDemoUser(): { email?: string } {
  try { return JSON.parse(localStorage.getItem(USER_KEY) || '{}') as { email?: string } } catch { return {} }
}
/** Stores a demo identity; replace this service with a real auth client later. */
export function saveDemoUser(email: string) { localStorage.setItem(USER_KEY, JSON.stringify({ email })) }
/** Ends the local demo session. */
export function clearDemoUser() { localStorage.removeItem(USER_KEY) }
/** Removes local mood data after an explicit user action. */
export function clearMoodEntries() { localStorage.removeItem(MOODS_KEY) }
/** Indicates whether this browser has a demo session. */
export function hasDemoUser() { return Boolean(localStorage.getItem(USER_KEY)) }
