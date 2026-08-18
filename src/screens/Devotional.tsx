import { ScreenHeader } from '../components/ScreenHeader'
import { dailyPrayer, reflectionPrompts } from '../data/prayer'

export function Devotional({
  onBack,
  journalText,
  onChangeJournal,
}: {
  onBack: () => void
  journalText: string
  onChangeJournal: (text: string) => void
}) {
  return (
    <div className="pb-24">
      <ScreenHeader title="Devocional" subtitle="Oración de Revestimiento Diario" onBack={onBack} />

      <div className="px-5 py-5">
        <div className="bg-white border border-bronze-500/25 rounded-xl px-5 py-6 mb-8 shadow-sm">
          <h2 className="font-display text-lg text-bronze-600 text-center mb-4">{dailyPrayer.title}</h2>
          <div className="space-y-1">
            {dailyPrayer.lines.map((line, i) =>
              line === '' ? (
                <div key={i} className="h-3" />
              ) : (
                <p key={i} className="font-display italic text-[15px] text-tinta-900 text-center leading-relaxed">
                  {line}
                </p>
              )
            )}
          </div>
        </div>

        <section>
          <h2 className="font-display text-base text-tinta-900 mb-2">Mi reflexión de hoy</h2>
          <ul className="mb-3 space-y-1">
            {reflectionPrompts.map((prompt) => (
              <li key={prompt} className="font-body text-xs text-tinta-700/50">
                · {prompt}
              </li>
            ))}
          </ul>
          <textarea
            value={journalText}
            onChange={(e) => onChangeJournal(e.target.value)}
            placeholder="Escribe aquí lo que Dios te muestra hoy…"
            rows={6}
            className="w-full bg-white border border-bronze-500/25 rounded-lg px-4 py-3 font-body text-sm text-tinta-900 placeholder:text-tinta-700/30 focus:outline-none focus:ring-2 focus:ring-bronze-400 resize-none"
          />
          <p className="font-body text-[11px] text-tinta-700/40 mt-2">
            Tus notas quedan guardadas solo en este dispositivo.
          </p>
        </section>
      </div>
    </div>
  )
}
