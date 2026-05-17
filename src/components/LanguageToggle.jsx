import { useTranslation } from 'react-i18next'

function LanguageToggle() {
  const { i18n } = useTranslation()

  const setLang = (lang) => {
    i18n.changeLanguage(lang)
  }

  const btnBase = "px-2.5 py-1 rounded text-xs font-semibold tracking-wider transition"
  const active = "bg-yellow-300 text-indigo-950"
  const inactive = "text-violet-300 hover:text-violet-50"

  return (
    <div className="flex items-center gap-1 border border-indigo-800 rounded-md p-0.5">
      <button
        onClick={() => setLang('en')}
        className={`${btnBase} ${i18n.language === 'en' ? active : inactive}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('mr')}
        className={`${btnBase} ${i18n.language.startsWith('mr') ? active : inactive}`}
      >
        मराठी
      </button>
    </div>
  )
}

export default LanguageToggle