import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-300/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl text-center">
          <p className="text-xs md:text-sm text-violet-300 mb-6 tracking-[0.3em] uppercase">
            {t('home.label')}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-violet-50">
            {t('home.title')}
          </h1>
          <p className="text-2xl md:text-3xl text-violet-200 mb-3 font-light">
            {t('home.subtitle')}
          </p>
          <p className="text-base md:text-lg text-violet-300 mb-12 italic">
            {t('home.tagline')}
          </p>
          <Link
            to="/watch"
            className="bg-yellow-300 hover:bg-yellow-400 text-indigo-950 font-semibold px-8 py-3.5 rounded-full transition inline-flex items-center gap-2 shadow-lg shadow-yellow-300/20"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.269l9.344-5.89a1.5 1.5 0 0 0 0-2.538L6.3 2.84z" />
            </svg>
            {t('home.watchBtn')}
          </Link>
        </div>
      </section>
{/* POSTER */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-violet-300 text-xs tracking-[0.3em] uppercase mb-6 text-center">
            {t('home.posterLabel')}
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/50 ring-1 ring-indigo-800">
            <img
              src="/poster.jpg"
              alt="Sukhachi Jadoo film poster"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      {/* SYNOPSIS */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <p className="text-violet-300 text-xs tracking-[0.3em] uppercase mb-6 text-center">
          {t('home.storyLabel')}
        </p>
        <p className="text-lg md:text-2xl text-violet-100 leading-relaxed text-center font-light">
          {t('home.synopsis')}
        </p>
      </section>

      {/* DETAILS STRIP */}
      <section className="px-6 py-16 border-y border-indigo-900">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-xs text-violet-300 tracking-widest uppercase mb-2">{t('home.details.year')}</p>
            <p className="text-violet-50 font-medium text-lg">{t('home.details.yearValue')}</p>
          </div>
          <div>
            <p className="text-xs text-violet-300 tracking-widest uppercase mb-2">{t('home.details.language')}</p>
            <p className="text-violet-50 font-medium text-lg">{t('home.details.languageValue')}</p>
          </div>
          <div>
            <p className="text-xs text-violet-300 tracking-widest uppercase mb-2">{t('home.details.format')}</p>
            <p className="text-violet-50 font-medium text-lg">{t('home.details.formatValue')}</p>
          </div>
          <div>
            <p className="text-xs text-violet-300 tracking-widest uppercase mb-2">{t('home.details.premiered')}</p>
            <p className="text-violet-50 font-medium text-lg">{t('home.details.premieredValue')}</p>
          </div>
        </div>
      </section>

     
    </>
  )
}

export default Home