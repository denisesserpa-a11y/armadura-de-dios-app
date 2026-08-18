import { ScreenHeader } from '../components/ScreenHeader'
import { IconSeal } from '../components/icons'

interface Badge {
  id: string
  label: string
  unlocked: boolean
}

function ProgressBar({ value, max, label }: { value: number; max: number; label: string }) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="font-body text-sm text-tinta-900">{label}</span>
        <span className="font-body text-xs text-tinta-700/50">
          {value}/{max}
        </span>
      </div>
      <div className="h-2 rounded-full bg-vitela-200 overflow-hidden">
        <div className="h-full bg-bronze-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export function Progress({
  onBack,
  chaptersRead,
  totalChapters,
  ritualStreak,
  bibleDaysRead,
}: {
  onBack: () => void
  chaptersRead: number
  totalChapters: number
  ritualStreak: number
  bibleDaysRead: number
}) {
  const badges: Badge[] = [
    { id: 'b1', label: 'Primer paso', unlocked: chaptersRead >= 1 },
    { id: 'b2', label: 'Libro completo', unlocked: chaptersRead >= totalChapters },
    { id: 'b3', label: '7 días de ritual', unlocked: ritualStreak >= 7 },
    { id: 'b4', label: '30 días de ritual', unlocked: ritualStreak >= 30 },
    { id: 'b5', label: '30 días en la Palabra', unlocked: bibleDaysRead >= 30 },
    { id: 'b6', label: 'Un año en la Palabra', unlocked: bibleDaysRead >= 365 },
  ]

  return (
    <div className="pb-24">
      <ScreenHeader title="Mi Progreso" onBack={onBack} />

      <div className="px-5 py-5">
        <ProgressBar value={chaptersRead} max={totalChapters} label="Capítulos del libro" />
        <ProgressBar value={bibleDaysRead} max={365} label="Días de lectura bíblica" />

        <div className="mb-6">
          <div className="flex justify-between mb-1.5">
            <span className="font-body text-sm text-tinta-900">Racha del ritual diario</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-bronze-500/25 rounded-lg px-4 py-3 shadow-sm">
            <span className="font-display text-2xl text-bronze-600">{ritualStreak}</span>
            <span className="font-body text-xs text-tinta-700/60">
              {ritualStreak === 1 ? 'día seguido activando la armadura' : 'días seguidos activando la armadura'}
            </span>
          </div>
        </div>

        <h2 className="font-display text-base text-tinta-900 mb-3">Conquistas</h2>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`flex flex-col items-center gap-1.5 rounded-lg py-4 px-2 border ${
                badge.unlocked ? 'border-bronze-500/40 bg-bronze-500/10' : 'border-bronze-500/15 bg-white'
              }`}
            >
              <IconSeal className={`w-7 h-7 ${badge.unlocked ? 'text-bronze-600' : 'text-tinta-700/15'}`} />
              <span
                className={`font-body text-[10px] text-center leading-tight ${
                  badge.unlocked ? 'text-tinta-900' : 'text-tinta-700/30'
                }`}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
