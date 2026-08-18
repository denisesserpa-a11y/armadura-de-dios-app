export function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      aria-pressed={checked}
      className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
        checked ? 'bg-bronze-500 border-bronze-500' : 'border-bronze-500/50 bg-transparent'
      }`}
    >
      {checked && (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-tinta-900" fill="none">
          <path d="M5 12 L10 17 L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}
