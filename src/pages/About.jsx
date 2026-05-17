import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()

  return (
    <main className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-violet-300 text-xs tracking-[0.3em] uppercase mb-4">{t('about.label')}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-violet-50 mb-4">{t('about.title')}</h1>
          <p className="text-violet-300 italic">{t('about.subtitle')}</p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-6">{t('about.storyHeading')}</h2>
          <p className="text-violet-100 text-lg leading-relaxed mb-4">{t('about.storyP1')}</p>
          <p className="text-violet-100 text-lg leading-relaxed">{t('about.storyP2')}</p>
        </section>

        <section className="mb-16 bg-indigo-900/40 border-l-4 border-yellow-300 rounded-r-xl p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-6">{t('about.directorHeading')}</h2>
          <p className="text-violet-100 text-lg leading-relaxed italic mb-4">"{t('about.directorQuote')}"</p>
          <p className="text-violet-300 text-sm">{t('about.directorAttr')}</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-6">{t('about.themesHeading')}</h2>
          <ul className="space-y-3 text-violet-100 text-lg">
            <li className="flex gap-3"><span className="text-yellow-300">•</span><span>{t('about.theme1')}</span></li>
            <li className="flex gap-3"><span className="text-yellow-300">•</span><span>{t('about.theme2')}</span></li>
            <li className="flex gap-3"><span className="text-yellow-300">•</span><span>{t('about.theme3')}</span></li>
            <li className="flex gap-3"><span className="text-yellow-300">•</span><span>{t('about.theme4')}</span></li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default About