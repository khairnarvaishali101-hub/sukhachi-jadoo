import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  const email = "shaktishali005@gmail.com"
  const instagram = "https://instagram.com/your_handle"
  const youtube = "https://youtube.com/@your_channel"

  return (
    <main className="min-h-[calc(100vh-4rem)] px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-300 text-xs tracking-[0.3em] uppercase mb-4">
            {t('contact.label')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-violet-50 mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-violet-300 italic">
            {t('contact.subtitle')}
          </p>
        </div>

        <p className="text-violet-100 text-lg leading-relaxed text-center mb-12">
          {t('contact.intro')}
        </p>

        <div className="bg-indigo-900/40 border border-indigo-800 rounded-2xl p-8 mb-6 text-center">
          <p className="text-violet-300 text-xs tracking-[0.25em] uppercase mb-3">
            {t('contact.emailLabel')}
          </p>
          <a
            href={`mailto:${email}`}
            className="text-yellow-300 hover:text-yellow-400 text-xl md:text-2xl font-semibold transition break-all"
          >
            {email}
          </a>
          <p className="text-violet-300 text-sm mt-4">
            {t('contact.emailNote')}
          </p>
        </div>

        <div className="bg-indigo-900/40 border border-indigo-800 rounded-2xl p-8 text-center">
          <p className="text-violet-300 text-xs tracking-[0.25em] uppercase mb-5">
            {t('contact.followLabel')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-900 hover:bg-indigo-800 text-violet-50 px-6 py-2.5 rounded-full transition text-sm font-medium"
            >
              Instagram
            </a>
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-900 hover:bg-indigo-800 text-violet-50 px-6 py-2.5 rounded-full transition text-sm font-medium"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
