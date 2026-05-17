import { useTranslation } from 'react-i18next'

function Watch() {
  const { t } = useTranslation()
  const VIDEO_ID = "OZTgb2mqrsA"   // keep your real video ID here

  return (
    <main className="min-h-[calc(100vh-4rem)] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-violet-300 text-xs tracking-[0.3em] uppercase mb-4">
            {t('watch.label')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-violet-50 mb-3">
            {t('watch.title')}
          </h1>
          <p className="text-violet-300 italic">
            {t('watch.subtitle')}
          </p>
        </div>

        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/50 ring-1 ring-indigo-800">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
            title="Sukhachi Jadoo — Short Film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-violet-200 leading-relaxed">
            {t('watch.closing')}
          </p>
        </div>
      </div>
    </main>
  )
}

export default Watch