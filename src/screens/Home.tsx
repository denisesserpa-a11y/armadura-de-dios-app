import { Banner } from '../components/Banner'
import { ShieldTile } from '../components/ShieldTile'
import {
  IconBook,
  IconChecklist,
  IconCompass,
  IconCandle,
  IconSeal,
} from '../components/icons'
import type { Screen } from '../App'

export function Home({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="pb-24">
      <Banner />

      <div className="px-6 mt-8">
        <p className="font-display italic text-center text-tinta-700/70 text-sm mb-8 leading-relaxed">
          "Estad, pues, firmes, ceñidos con la verdad" — Efesios 6:14
        </p>

        <div className="grid grid-cols-6 gap-x-4 gap-y-8">
          <div className="col-span-2 flex justify-center">
            <ShieldTile
              icon={<IconBook className="w-9 h-9" />}
              label="El Libro"
              onClick={() => onNavigate('book')}
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <ShieldTile
              icon={<IconChecklist className="w-9 h-9" />}
              label="Ritual Diario"
              onClick={() => onNavigate('ritual')}
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <ShieldTile
              icon={<IconCompass className="w-9 h-9" />}
              label="Plan de Lectura"
              onClick={() => onNavigate('plan')}
            />
          </div>
          <div className="col-span-2 flex justify-center col-start-2">
            <ShieldTile
              icon={<IconCandle className="w-9 h-9" />}
              label="Devocional"
              onClick={() => onNavigate('devotional')}
            />
          </div>
          <div className="col-span-2 flex justify-center col-start-4">
            <ShieldTile
              icon={<IconSeal className="w-9 h-9" />}
              label="Mi Progreso"
              onClick={() => onNavigate('progress')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
