export function formatDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function todayStr(): string {
  return formatDate(new Date())
}

export function daysSince(dateStr: string): number {
  const start = new Date(dateStr + 'T00:00:00')
  const today = new Date()
  const todayLocal = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const diffMs = todayLocal.getTime() - start.getTime()
  return Math.floor(diffMs / (1000 * 60 * 60 * 24))
}

export function computeStreak(completedDays: string[]): number {
  const set = new Set(completedDays)
  let streak = 0
  const cursor = new Date()
  let cursorStr = formatDate(cursor)
  if (!set.has(cursorStr)) {
    cursor.setDate(cursor.getDate() - 1)
    cursorStr = formatDate(cursor)
  }
  while (set.has(cursorStr)) {
    streak++
    cursor.setDate(cursor.getDate() - 1)
    cursorStr = formatDate(cursor)
  }
  return streak
}

// Número de dias desde uma data fixa (calendário local). Serve para escolher o devocional
// do dia: muda à meia-noite e é igual para todos os usuários no mesmo dia.
export function dayNumber(d: Date = new Date()): number {
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000)
}
