import { useTranslation } from 'react-i18next'

function getInitials(name) {
  return name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase()
}

const cast = [
  { name: "Vaishali Shimpi",       roleKey: "Lead",       image: "/cast/vaishali.jpg" },
  { name: "Shakti Shimpi",         roleKey: "Husband",    image: "/cast/shakti.jpg" },
  { name: "Rohan Shimpi",          roleKey: "Son",        image: "/cast/rohan.jpg" },
  { name: "Anil Khairnar",         roleKey: "Father",     image: "/cast/anil.jpg" },
  { name: "Kamal Khairnar",        roleKey: "Mother",     image: "/cast/kamal.jpg" },
  { name: "Radhika Paranjape",     roleKey: "Supporting", image: "/cast/radhika.jpg" },
  { name: "Rajashree Varanshivar", roleKey: "Supporting", image: "/cast/rajashree.jpg" },
  { name: "Prasanna Varanshivar",  roleKey: "Supporting", image: "/cast/prasanna.jpg" },
]

const crew = [
  { roleKey: "Director",        people: ["Vaishali Shimpi", "Shakti Shimpi"] },
  { roleKey: "Writer",          people: ["Vaishali Shimpi"] },
  { roleKey: "Producer",        people: ["Vaishali Shimpi", "Shakti Shimpi"] },
  { roleKey: "Cinematographer", people: ["Rohan Shimpi"] },
  { roleKey: "Editor",          people: ["Vaishali Shimpi", "Shakti Shimpi"] },
  { roleKey: "Music",           people: ["Anil Khairnar"] },
]

function CastCard({ member }) {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center group">
      {/* Circular photo */}
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-indigo-800 border-2 border-indigo-700 group-hover:border-yellow-300 transition flex items-center justify-center relative overflow-hidden">
        <span className="text-3xl font-light text-violet-200 tracking-widest">
          {getInitials(member.name)}
        </span>
        {member.image && (
          <img
            src={member.image}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => e.currentTarget.remove()}
          />
        )}
      </div>
      {/* Name + role below */}
      <div className="text-center mt-4 px-2">
        <p className="text-violet-50 font-medium text-sm md:text-base mb-1">
          {member.name}
        </p>
        <p className="text-violet-300 text-[10px] md:text-xs tracking-wider uppercase">
          {t(`castCrew.roles.${member.roleKey}`)}
        </p>
      </div>
    </div>
  )
}

function CrewRow({ roleKey, people }) {
  const { t } = useTranslation()
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 py-5 border-b border-indigo-900 last:border-b-0">
      <p className="text-violet-300 text-xs tracking-[0.25em] uppercase md:text-right">
        {t(`castCrew.roles.${roleKey}`)}
      </p>
      <div className="md:col-span-2 text-violet-50 text-lg font-medium">
        {people.join(" · ")}
      </div>
    </div>
  )
}

function CastCrew() {
  const { t } = useTranslation()
  return (
    <main className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-violet-300 text-xs tracking-[0.3em] uppercase mb-4">{t('castCrew.label')}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-violet-50 mb-4">{t('castCrew.title')}</h1>
          <p className="text-violet-300 italic">{t('castCrew.subtitle')}</p>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-10 text-center">
            {t('castCrew.castHeading')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {cast.map((member) => (
              <CastCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-8 text-center">
            {t('castCrew.crewHeading')}
          </h2>
          <div className="bg-indigo-900/30 border border-indigo-800 rounded-xl px-6 md:px-10 py-2">
            {crew.map((row) => (
              <CrewRow key={row.roleKey} roleKey={row.roleKey} people={row.people} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default CastCrew
