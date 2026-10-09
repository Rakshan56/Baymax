import type { Mood, MoodEntry } from '../types'

const API_BASE = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || ''

/** Indicates whether the frontend has been configured to use the FastAPI service. */
export const isApiConfigured = Boolean(API_BASE)

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
  })
  if (!response.ok) {
    const body = await response.json().catch(() => ({})) as { detail?: string }
    throw new Error(body.detail || `Request failed with status ${response.status}`)
  }
  return response.status === 204 ? undefined as T : response.json() as Promise<T>
}

/** Registers or logs in through the backend and relies on its HTTP-only cookie. */
export function authenticate(path: '/api/auth/register' | '/api/auth/login', email: string, password: string) {
  return request<{ id: string; email: string }>(path, { method: 'POST', body: JSON.stringify({ email, password }) })
}

/** Validates the current server session without exposing the cookie to JavaScript. */
export function getCurrentUser() {
  return request<{ id: string; email: string }>('/api/auth/me')
}

/** Creates a user-owned mood record through the backend. */
export function createRemoteMood(mood: Mood, note: string) {
  return request<MoodEntry>('/api/moods', { method: 'POST', body: JSON.stringify({ mood, note, tags: [] }) })
}
