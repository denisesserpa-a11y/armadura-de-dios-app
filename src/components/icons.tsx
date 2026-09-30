interface IconProps {
  className?: string
}

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 4 L40 10 V22 C40 32 33 39 24 44 C15 39 8 32 8 22 V10 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M24 12 V36 M16 20 H32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function IconBook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 12 C21 9 14 8 8 9 V35 C14 34 21 35 24 38 C27 35 34 34 40 35 V9 C34 8 27 9 24 12 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M24 12 V38" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function IconChecklist({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 24 L21 29 L32 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconCompass({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1.6" />
      <path d="M30 18 L26 26 L18 30 L22 22 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

export function IconCandle({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 8 C27 12 27 15 24 17 C21 15 21 12 24 8 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <rect x="18" y="19" width="12" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18 26 H30" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function IconSeal({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="20" r="12" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 30 L14 42 L24 37 L34 42 L31 30" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M24 13 L26.5 18 L32 18.7 L28 22.3 L29 27.7 L24 25 L19 27.7 L20 22.3 L16 18.7 L21.5 18 Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  )
}

export function IconHome({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M9 22 L24 9 L39 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 19 V38 H35 V19" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M20 38 V27 H28 V38" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export function IconChevronLeft({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M15 5 L8 12 L15 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconLock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="10" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10 V7 a4 4 0 0 1 8 0 v3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}
