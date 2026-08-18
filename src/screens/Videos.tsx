import { useState } from 'react'
import { ScreenHeader } from '../components/ScreenHeader'
import { videos } from '../data/videos'
import { IconPlay } from '../components/icons'

export function Videos({ onBack }: { onBack: () => void }) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="pb-24">
      <ScreenHeader title="Videos" subtitle="Del canal La Biblia Descomplicada" onBack={onBack} />

      <div className="px-4 py-4 space-y-4">
        {videos.map((video) => {
          const open = openId === video.id
          return (
            <div key={video.id} className="rounded-xl overflow-hidden border border-bronze-500/25 bg-white shadow-sm">
              {open ? (
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  onClick={() => setOpenId(video.id)}
                  className="relative w-full aspect-video flex items-center justify-center bg-vitela-200"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="relative w-14 h-14 rounded-full bg-bronze-500/90 flex items-center justify-center">
                    <IconPlay className="w-7 h-7 text-white" />
                  </span>
                </button>
              )}
              <p className="font-body text-sm text-tinta-900 px-4 py-3">{video.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
