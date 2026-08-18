import { IconChevronLeft } from './icons'

export function ScreenHeader({
  title,
  subtitle,
  onBack,
}: {
  title: string
  subtitle?: string
  onBack: () => void
}) {
  return (
    <header className="sticky top-0 z-10 bg-vitela-50/95 backdrop-blur border-b border-bronze-500/25 px-4 py-4">
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          aria-label="Volver"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-bronze-500/40 text-bronze-600 active:bg-vitela-100"
        >
          <IconChevronLeft className="w-5 h-5" />
        </button>
        <div className="min-w-0">
          <h1 className="font-display text-lg text-tinta-900 truncate">{title}</h1>
          {subtitle && <p className="font-body text-xs text-tinta-700/50 truncate">{subtitle}</p>}
        </div>
      </div>
    </header>
  )
}
