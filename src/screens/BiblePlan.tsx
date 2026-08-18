import { useMemo, useState } from 'react'
import { ScreenHeader } from '../components/ScreenHeader'
import { Checkbox } from '../components/Checkbox'
import biblePlanData from '../data/biblePlan.json'
import type { BibleDay } from '../types'
import { daysSince } from '../utils/date'

const biblePlan = biblePlanData as BibleDay[]

export function BiblePlan({
  onBack,
  startDate,
  onStart,
  completedDays,
  onToggleDay,
}: {
  onBack: () => void
  startDate: string | null
  onStart: () => void
  completedDays: Record<number, boolean>
  onToggleDay: (day: number) => void
}) {
  const [showAll, setShowAll] = useState(false)

  const currentDayNumber = useMemo(() => {
    if (!startDate) return 1
    return Math.min(Math.max(daysSince(startDate) + 1, 1), 365)
  }, [startDate])

  const todayEntry = biblePlan.find((d) => d.dia === currentDayNumber)
  const readCount = Object.values(completedDays).filter(Boolean).length

  if (!startDate) {
    return (
      <div className="pb-24">
        <ScreenHeader title="Plan de Lectura" subtitle="Biblia completa en 1 año" onBack={onBack} />
        <div className="px-6 py-10 text-center">
          <p className="font-body text-sm text-tinta-700/70 leading-relaxed mb-6">
            Este plan recorre los 1.189 capítulos de la Biblia en 365 días, en orden canónico.
            Tu "día 1" comienza en la fecha en la que actives el plan — no en el 1 de enero.
          </p>
          <button
            onClick={onStart}
            className="bg-bronze-500 text-white font-body font-semibold px-6 py-3 rounded-lg"
          >
            Comenzar el plan hoy
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-24">
      <ScreenHeader title="Plan de Lectura" subtitle={`Día ${currentDayNumber} de 365 · ${readCount} leídos`} onBack={onBack} />

      <div className="px-4 py-4">
        {todayEntry && (
          <div className="bg-white border border-bronze-500/30 rounded-xl px-4 py-4 mb-6 shadow-sm">
            <p className="font-body text-[11px] uppercase tracking-widest text-bronze-600 mb-1">
              Lectura de hoy — Día {todayEntry.dia}
            </p>
            <p className="font-display text-lg text-tinta-900 mb-3">{todayEntry.referencia}</p>
            <button
              onClick={() => onToggleDay(todayEntry.dia)}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-body text-sm ${
                completedDays[todayEntry.dia]
                  ? 'bg-vitela-100 border border-bronze-500/40 text-bronze-600'
                  : 'bg-bronze-500 text-white font-semibold'
              }`}
            >
              <Checkbox checked={!!completedDays[todayEntry.dia]} onChange={() => onToggleDay(todayEntry.dia)} />
              {completedDays[todayEntry.dia] ? 'Leído hoy' : 'Marcar como leído'}
            </button>
          </div>
        )}

        <button
          onClick={() => setShowAll((v) => !v)}
          className="font-body text-xs text-bronze-600 mb-3"
        >
          {showAll ? '▲ Ocultar plan completo' : '▼ Ver los 365 días'}
        </button>

        {showAll && (
          <ul className="space-y-1.5 max-h-[60vh] overflow-y-auto scrollbar-none pr-1">
            {biblePlan.map((entry) => (
              <li key={entry.dia}>
                <button
                  onClick={() => onToggleDay(entry.dia)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                    entry.dia === currentDayNumber ? 'bg-bronze-500/10 border border-bronze-500/30' : ''
                  }`}
                >
                  <Checkbox checked={!!completedDays[entry.dia]} onChange={() => onToggleDay(entry.dia)} />
                  <span className="font-body text-xs text-tinta-700/50 w-9 shrink-0">D{entry.dia}</span>
                  <span className="font-body text-sm text-tinta-800/90 truncate">{entry.referencia}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
