import { useState } from 'react'
import { ScreenHeader } from '../components/ScreenHeader'
import { Checkbox } from '../components/Checkbox'
import { ritualBlocks } from '../data/ritual'

export function Ritual({
  onBack,
  stepsToday,
  onToggleStep,
  allDoneToday,
  streak,
}: {
  onBack: () => void
  stepsToday: Record<string, boolean>
  onToggleStep: (id: string) => void
  allDoneToday: boolean
  streak: number
}) {
  const [openDetail, setOpenDetail] = useState<string | null>(null)

  return (
    <div className="pb-24">
      <ScreenHeader title="Ritual Diario" subtitle="Capítulo 9 — activación de la armadura" onBack={onBack} />

      <div className="px-4 py-4">
        {streak > 0 && (
          <div className="mb-5 flex items-center justify-center gap-2 bg-white border border-bronze-500/30 rounded-full px-4 py-2 shadow-sm">
            <span className="font-body text-sm text-bronze-600 font-semibold">
              🔥 {streak} {streak === 1 ? 'día seguido' : 'días seguidos'}
            </span>
          </div>
        )}

        {allDoneToday && (
          <div className="mb-5 text-center bg-bronze-500/10 border border-bronze-500/30 rounded-lg py-3 px-4">
            <p className="font-display text-bronze-600 text-sm">Armadura activada hoy ✦</p>
          </div>
        )}

        <div className="space-y-6">
          {ritualBlocks.map((block) => (
            <section key={block.id}>
              <div className="flex items-baseline justify-between mb-2">
                <h2 className="font-display text-base text-tinta-900">{block.title}</h2>
                <span className="font-body text-[11px] text-bronze-600/80">{block.duration}</span>
              </div>
              <div className="space-y-2">
                {block.steps.map((step) => {
                  const checked = !!stepsToday[step.id]
                  const open = openDetail === step.id
                  return (
                    <div
                      key={step.id}
                      className={`rounded-lg border px-3 py-3 transition-colors ${
                        checked ? 'bg-bronze-500/10 border-bronze-500/30' : 'bg-white border-bronze-500/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox checked={checked} onChange={() => onToggleStep(step.id)} />
                        <button
                          className="flex-1 text-left"
                          onClick={() => setOpenDetail(open ? null : step.id)}
                        >
                          <p className={`font-body text-sm ${checked ? 'text-tinta-700/60 line-through' : 'text-tinta-900'}`}>
                            {step.label}
                          </p>
                        </button>
                      </div>
                      {open && (
                        <p className="font-body text-xs text-tinta-700/60 mt-2 pl-9 leading-relaxed">
                          {step.detail}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
