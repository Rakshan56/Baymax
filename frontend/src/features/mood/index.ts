/** Mood feature boundary keeps mood choices and persistence separate from page rendering. */
export { moods, moodMessages } from '../../data/content'
export { readMoodEntries, saveMoodEntries, clearMoodEntries } from '../../services/localStorage'
