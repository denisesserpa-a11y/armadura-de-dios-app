import type { ReactNode } from 'react'

interface ShieldTileProps {
  icon: ReactNode
  label: string
  sublabel?: string
  onClick: () => void
}

export function ShieldTile({ icon, label, sublabel, onClick }: ShieldTileProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-2 active:scale-95 transition-transform"
    >
      <span className="shield-clip w-20 h-20 flex items-center justify-center bg-white border border-bronze-500/40 text-bronze-600 group-active:bg-vitela-100 shadow-seal">
        {icon}
      </span>
      <span className="font-body text-xs font-medium text-tinta-900 text-center leading-tight px-1">
        {label}
      </span>
      {sublabel && <span className="font-body text-[10px] text-tinta-700/50 text-center">{sublabel}</span>}
    </button>
  )
}
