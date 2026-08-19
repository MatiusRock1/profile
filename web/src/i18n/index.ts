import { en } from './en'
import { es } from './es'
import type { Content, Lang } from './types'

export type { Content, Lang }

export const STORAGE_KEY = 'jt-lang'

export const dictionaries: Record<Lang, Content> = {
  en,
  es,
}

export function isLang(value: string | null | undefined): value is Lang {
  return value === 'en' || value === 'es'
}

/** English by default; Spanish only when the device language starts with "es". */
export function detectLang(): Lang {
  if (typeof navigator === 'undefined') return 'en'

  const candidates = [
    navigator.language,
    ...(navigator.languages ?? []),
  ].filter(Boolean)

  for (const code of candidates) {
    if (code.toLowerCase().startsWith('es')) return 'es'
  }

  return 'en'
}

export function resolveInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLang(saved)) return saved
  } catch {
    // ignore storage errors
  }

  return detectLang()
}
