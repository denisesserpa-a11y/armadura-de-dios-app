import { ScreenHeader } from '../components/ScreenHeader'
import { reflectionPrompts } from '../data/prayer'
import { devotionals } from '../data/devotionals'
import { dayNumber } from '../utils/date'

export function Devotional({
  onBack,
  journalText,
  onChangeJournal,
}: {
  onBack: () => void
  journalText: string
  onChangeJournal: (text: string) => void
}) {
  // un devocional distinto cada día; al terminar la lista vuelve a empezar
  const today = devotionals[dayNumber() % devotionals.length]
  const dateLabel = new Date().toLocaleDateString('es', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <div className="pb-24">
      <ScreenHeader title="Devocional" subtitle={dateLabel} onBack={onBack} />

      <div className="px-5 py-5">
        <p className="font-body text-xs uppercase tracking-widest text-bronze-600 mb-2">{today.tema}</p>
        <h2 className="font-display text-2xl text-tinta-900 leading-snug mb-4">{today.titulo}</h2>

        <blockquote className="mb-5 border-l-2 border-bronze-500 pl-4 py-1">
          <p className="font-display italic text-tinta-900 text-[15px] leading-relaxed">"{today.versiculo}"</p>
          <p className="font-body text-xs text-bronze-600 mt-1.5 tracking-wide">— {today.ref}</p>
        </blockquote>

        <p className="font-body text-[15px] text-tinta-800/90 leading-relaxed mb-6">{today.reflexion}</p>

        <div className="bg-white border border-bronze-500/25 rounded-xl px-5 py-6 mb-8 shadow-sm">
          <h3 className="font-display text-base text-bronze-600 text-center mb-4">Oración del día</h3>
          <div className="space-y-1">
            {today.oracion.map((line, i) =>
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
          <p className="font-body text-sm text-bronze-600 mb-2">{today.pregunta}</p>
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
