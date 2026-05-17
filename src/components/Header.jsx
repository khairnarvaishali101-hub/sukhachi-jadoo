import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'

function Header() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Close menu on Escape key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setIsOpen(false) }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const linkBase = "px-3 py-2 rounded-md text-sm font-medium transition"
  const linkInactive = "text-violet-300 hover:text-violet-50 hover:bg-indigo-900"
  const linkActive = "text-yellow-300 bg-indigo-900"

  const mobileLinkBase = "block px-4 py-3 rounded-md text-base font-medium transition"
  const mobileLinkInactive = "text-violet-300 hover:text-violet-50 hover:bg-indigo-900"
  const mobileLinkActive = "text-yellow-300 bg-indigo-900"

  return (
    <header className="bg-indigo-950/95 backdrop-blur border-b border-indigo-900 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-violet-50 tracking-tight">
            Sukhachi Jadoo
          </NavLink>

          {/* DESKTOP NAV — hidden on small screens */}
          <div className="hidden lg:flex items-center gap-2">
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

          {/* MOBILE — language toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-violet-200 hover:text-yellow-300 hover:bg-indigo-900 transition"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        {isOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-indigo-900 space-y-1 pb-2">
            <NavLink to="/" end className={({ isActive }) => `${mobileLinkBase} ${isActive ? mobileLinkActive : mobileLinkInactive}`}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/watch" className={({ isActive }) => `${mobileLinkBase} ${isActive ? mobileLinkActive : mobileLinkInactive}`}>
              {t('nav.watch')}
            </NavLink>
            <NavLink to="/media" className={({ isActive }) => `${mobileLinkBase} ${isActive ? mobileLinkActive : mobileLinkInactive}`}>
              {t('nav.media')}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `${mobileLinkBase} ${isActive ? mobileLinkActive : mobileLinkInactive}`}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/cast-crew" className={({ isActive }) => `${mobileLinkBase} ${isActive ? mobileLinkActive : mobileLinkInactive}`}>
              {t('nav.castCrew')}
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${mobileLinkBase} ${isActive ? mobileLinkActive : mobileLinkInactive}`}>
              {t('nav.contact')}
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
