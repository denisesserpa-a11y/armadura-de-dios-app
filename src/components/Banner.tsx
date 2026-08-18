import { APP_NAME, APP_TAGLINE } from '../data/config'
import { IconSeal } from './icons'

export function Banner() {
  return (
    <div className="relative overflow-hidden bg-vitela-100 px-6 pt-10 pb-8 rounded-b-3xl border-b border-bronze-500/25">
      {/* halo decorativo */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #C99A4A 0%, transparent 70%)' }}
      />
      <div className="relative flex flex-col items-center text-center">
        <IconSeal className="w-10 h-10 text-bronze-600 mb-3" />
        <h1 className="font-display text-2xl text-tinta-900 leading-tight">{APP_NAME}</h1>
        <p className="font-body text-xs text-tinta-700/60 mt-1 tracking-wide">{APP_TAGLINE}</p>
      </div>
    </div>
  )
}
