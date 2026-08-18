import { useState, type FormEvent } from 'react'
import { ACCESS_CODE, APP_NAME, APP_TAGLINE } from '../data/config'
import { IconSeal } from './icons'

export function AccessGate({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (input.trim().toUpperCase() === ACCESS_CODE.toUpperCase()) {
      setError(false)
      onUnlock()
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-vitela-50 px-6 text-tinta-900">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <IconSeal className="w-16 h-16 text-bronze-600" />
        </div>
        <h1 className="font-display text-3xl text-center text-tinta-900 mb-1">{APP_NAME}</h1>
        <p className="font-body text-sm text-center text-tinta-700/70 mb-10">{APP_TAGLINE}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="code" className="font-body text-xs uppercase tracking-widest text-bronze-600 block mb-2">
              Código de acceso
            </label>
            <input
              id="code"
              autoFocus
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
                if (error) setError(false)
              }}
              placeholder="Ingresa tu código"
              className="w-full bg-white border border-bronze-500/40 rounded-lg px-4 py-3 font-body text-tinta-900 placeholder:text-tinta-700/30 tracking-wider focus:outline-none focus:ring-2 focus:ring-bronze-400"
            />
            {error && (
              <p className="mt-2 text-sm text-brasa-500 font-body">
                Ese código no es válido. Revisa el correo de tu compra e inténtalo de nuevo.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-bronze-500 hover:bg-bronze-600 active:bg-bronze-600 transition-colors text-white font-body font-semibold py-3 rounded-lg shadow-seal"
          >
            Entrar
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-tinta-700/40 font-body leading-relaxed">
          Recibiste este código por correo al comprar el manual. Si no lo encuentras, revisa la carpeta de spam o contacta al soporte de tu compra.
        </p>
      </div>
    </div>
  )
}
