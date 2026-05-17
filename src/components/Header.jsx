import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'

function Header() {
  const { t } = useTranslation()
  const linkBase = "px-3 py-2 rounded-md text-sm font-medium transition"
  const linkInactive = "text-violet-300 hover:text-violet-50 hover:bg-indigo-900"
  const linkActive = "text-yellow-300 bg-indigo-900"

  return (
    <header className="bg-indigo-950/95 backdrop-blur border-b border-indigo-900 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <NavLink to="/" className="text-xl font-bold text-violet-50 tracking-tight">
          Sukhachi Jadoo
        </NavLink>

        <div className="flex items-center gap-2 flex-wrap justify-end">
          <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/watch" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
            {t('nav.watch')}
          </NavLink>
          <NavLink to="/media" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
            {t('nav.media')}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
            {t('nav.about')}
          </NavLink>
          <NavLink to="/cast-crew" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
            {t('nav.castCrew')}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
            {t('nav.contact')}
          </NavLink>
          <LanguageToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
