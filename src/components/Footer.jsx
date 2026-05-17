import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-indigo-950 border-t border-indigo-900 mt-0">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="text-violet-50 font-bold text-lg mb-2">Sukhachi Jadoo</p>
            <p className="text-violet-300 text-sm italic">सुखाची जादू</p>
            <p className="text-violet-400 text-sm mt-3 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick links - CENTERED */}
          <div className="text-center">
            <p className="text-violet-200 text-xs tracking-[0.25em] uppercase mb-4">
              {t('footer.exploreLabel')}
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-violet-300 hover:text-yellow-300 transition">{t('nav.home')}</Link></li>
              <li><Link to="/watch" className="text-violet-300 hover:text-yellow-300 transition">{t('nav.watch')}</Link></li>
              <li><Link to="/media" className="text-violet-300 hover:text-yellow-300 transition">{t('nav.media')}</Link></li>
              <li><Link to="/about" className="text-violet-300 hover:text-yellow-300 transition">{t('nav.about')}</Link></li>
              <li><Link to="/cast-crew" className="text-violet-300 hover:text-yellow-300 transition">{t('nav.castCrew')}</Link></li>
              <li><Link to="/contact" className="text-violet-300 hover:text-yellow-300 transition">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Credits - RIGHT ALIGNED on tablet and up */}
          <div className="md:text-right">
            <p className="text-violet-200 text-xs tracking-[0.25em] uppercase mb-4">
              {t('footer.creditsLabel')}
            </p>
            <p className="text-violet-300 text-sm leading-relaxed">
              {t('footer.madeWith')}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-indigo-900 text-center">
          <p className="text-violet-400 text-xs">
            © {year} Sukhachi Jadoo · {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
