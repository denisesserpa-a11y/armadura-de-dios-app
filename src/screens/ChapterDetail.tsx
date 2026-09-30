import { ScreenHeader } from '../components/ScreenHeader'
import { Checkbox } from '../components/Checkbox'
import { chapters } from '../data/chapters'
import type { ContentBlock } from '../types'

function Block({ block }: { block: ContentBlock }) {
  if (block.type === 'h2') {
    return <h2 className="font-display text-lg text-bronze-600 mt-8 mb-2">{block.text}</h2>
  }
  if (block.type === 'verse') {
    return (
      <blockquote className="my-5 border-l-2 border-bronze-500 pl-4 py-1">
        <p className="font-display italic text-tinta-900 text-[15px] leading-relaxed">"{block.text}"</p>
        {block.ref && <p className="font-body text-xs text-bronze-600 mt-1.5 tracking-wide">— {block.ref}</p>}
      </blockquote>
    )
  }
  return <p className="font-body text-[15px] text-tinta-800/90 leading-relaxed mb-4">{block.text}</p>
}

export function ChapterDetail({
  chapterId,
  onBack,
  onOpenChapter,
  readIds,
  onToggleRead,
}: {
  chapterId: string
  onBack: () => void
  onOpenChapter: (id: string) => void
  readIds: Record<string, boolean>
  onToggleRead: (id: string) => void
}) {
  const index = chapters.findIndex((c) => c.id === chapterId)
  const chapter = chapters[index]
  if (!chapter) return null

  const prev = chapters[index - 1]
  const next = chapters[index + 1]
  const isRead = !!readIds[chapter.id]

  return (
    <div className="pb-28">
      <ScreenHeader title={chapter.number} subtitle={chapter.title} onBack={onBack} />

      <article className="px-5 py-5 max-w-md mx-auto">
        <h1 className="font-display text-2xl text-tinta-900 leading-snug mb-1">{chapter.title}</h1>
        <p className="font-body text-sm text-tinta-700/50 italic mb-6">{chapter.summary}</p>

        {chapter.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}

        <button
          onClick={() => onToggleRead(chapter.id)}
          className={`w-full mt-8 flex items-center justify-center gap-2 py-3 rounded-lg font-body text-sm font-medium transition-colors ${
            isRead
              ? 'bg-white border border-bronze-500/40 text-bronze-600'
              : 'bg-bronze-500 text-white'
          }`}
        >
          <Checkbox checked={isRead} onChange={() => onToggleRead(chapter.id)} />
          {isRead ? 'Marcado como leído' : 'Marcar como completado'}
        </button>

        <div className="flex justify-between mt-6 gap-3">
          {prev ? (
            <button
              onClick={() => onOpenChapter(prev.id)}
              className="font-body text-xs text-tinta-700/60 active:text-bronze-600"
            >
              ← {prev.number}
            </button>
          ) : (
            <span />
          )}
          {next && (
            <button
              onClick={() => onOpenChapter(next.id)}
              className="font-body text-xs text-tinta-700/60 active:text-bronze-600"
            >
              {next.number} →
            </button>
          )}
        </div>
      </article>
    </div>
  )
}
