import { ScreenHeader } from '../components/ScreenHeader'
import { chapters } from '../data/chapters'
import { Checkbox } from '../components/Checkbox'

export function Book({
  onBack,
  onOpenChapter,
  readIds,
}: {
  onBack: () => void
  onOpenChapter: (id: string) => void
  readIds: Record<string, boolean>
}) {
  const readCount = chapters.filter((c) => readIds[c.id]).length

  return (
    <div className="pb-24">
      <ScreenHeader title="El Libro" subtitle={`${readCount} de ${chapters.length} leídos`} onBack={onBack} />

      <ul className="px-4 py-4 space-y-3">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <button
              onClick={() => onOpenChapter(chapter.id)}
              className="w-full flex items-start gap-3 bg-white border border-bronze-500/25 rounded-xl px-4 py-4 text-left active:bg-vitela-100 transition-colors shadow-sm"
            >
              <div className="mt-0.5">
                <Checkbox checked={!!readIds[chapter.id]} onChange={() => {}} />
              </div>
              <div className="min-w-0">
                <p className="font-body text-[11px] uppercase tracking-widest text-bronze-600">{chapter.number}</p>
                <p className="font-display text-base text-tinta-900 leading-snug mt-0.5">{chapter.title}</p>
                <p className="font-body text-xs text-tinta-700/60 mt-1 line-clamp-2">{chapter.summary}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
