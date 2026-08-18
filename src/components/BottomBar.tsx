import { IconHome } from './icons'

export function BottomBar({ onHome, isHome }: { onHome: () => void; isHome: boolean }) {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-vitela-50/95 backdrop-blur border-t border-bronze-500/25 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-md mx-auto flex items-center justify-center py-2.5">
        <button
          onClick={onHome}
          className={`flex flex-col items-center gap-0.5 px-6 py-1 transition-colors ${
            isHome ? 'text-bronze-600' : 'text-tinta-700/40 active:text-bronze-600'
          }`}
        >
          <IconHome className="w-6 h-6" />
          <span className="font-body text-[10px] tracking-wide">Inicio</span>
        </button>
      </div>
    </nav>
  )
}
