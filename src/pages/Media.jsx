import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// Replace the videoId values with your real YouTube IDs.
// Find them in the YouTube URL: youtube.com/watch?v=THIS_PART_HERE
const media = [
  {
    category: "teaser",
    items: [
      { title: "Sukhachi Jadoo — Official Teaser", videoId: "grrfkd5ZZD8" },
    ],
  },
  {
    category: "redCarpet",
    items: [
      { title: "Sukhachi Jadoo — Red Carpet Premiere", videoId: "dRiWB1bDGcE" },
    ],
  },
  {
    category: "songs",
    items: [
      { title: "“सुखाची जादू” - Main Song", videoId: "-1JZxaaYtc8" },
      { title: "Happy Birthday to Meera Song", videoId: "BZZVbmBfj7Q" },
      { title: "सुखाची जादू A Pop Song", videoId: "P5kPAbXS_EY" },
    ],
  },
]

function VideoCard({ videoId, title }) {
  const [playing, setPlaying] = useState(false)
  const thumbUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  return (
    <div className="bg-indigo-900/40 border border-indigo-800 rounded-xl overflow-hidden hover:border-yellow-300/50 transition">
      <div className="aspect-video bg-indigo-800 relative">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group cursor-pointer"
            aria-label={`Play ${title}`}
          >
            <img
              src={thumbUrl}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => e.currentTarget.remove()}
            />
            <div className="absolute inset-0 bg-indigo-950/30 group-hover:bg-indigo-950/10 transition flex items-center justify-center">
              <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg shadow-yellow-300/30 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-indigo-950 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.269l9.344-5.89a1.5 1.5 0 0 0 0-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="p-4">
        <p className="text-violet-50 font-medium text-sm md:text-base">
          {title}
        </p>
      </div>
    </div>
  )
}

function Media() {
  const { t } = useTranslation()

  return (
    <main className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Page title */}
        <div className="text-center mb-20">
          <p className="text-violet-300 text-xs tracking-[0.3em] uppercase mb-4">
            {t('media.label')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-violet-50 mb-4">
            {t('media.title')}
          </h1>
          <p className="text-violet-300 italic">
            {t('media.subtitle')}
          </p>
        </div>

        {/* Categories */}
        {media.map((section) => (
          <section key={section.category} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-8 text-center">
              {t(`media.categories.${section.category}`)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item) => (
                <VideoCard
                  key={item.videoId}
                  videoId={item.videoId}
                  title={item.title}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default Media
