const formats = [
  { icon: 'home_work',  label: 'Удалённо' },
  { icon: 'corporate_fare', label: 'Гибрид' },
  { icon: 'apartment', label: 'Офис' },
]

export default function Contacts() {
  return (
    <section id="contact">
      <SectionTitle icon="contacts">Контакты</SectionTitle>

      <div className="liquid-glass rounded-3xl p-10 md:p-14 relative overflow-hidden reveal">
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full pointer-events-none blur-[80px]"
             style={{ background: 'color-mix(in srgb, var(--md-primary) 10%, transparent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start relative z-10">

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--md-on-surface)' }}>
              Связаться со мной
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { icon: 'mail',        href: 'mailto:petrovskiyvv@mail.ru', label: 'petrovskiyvv@mail.ru',        sub: 'Предпочтительный способ связи' },
                { icon: 'send',        href: 'https://t.me/petrovskiyvv',   label: '@petrovskiyvv',               sub: 'Telegram' },
                { icon: 'location_on', href: null,                           label: 'Екатеринбург, Россия',        sub: 'Готов к командировкам' },
              ].map(({ icon, href, label, sub }) => {
                const inner = (
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined p-2.5 rounded-xl flex-shrink-0 transition-colors duration-200"
                          style={{ background: 'var(--glass-bg)', color: 'var(--md-primary)' }}>
                      {icon}
                    </span>
                    <div>
                      <div className="text-sm font-medium" style={{ color: 'var(--md-on-surface)' }}>{label}</div>
                      <div className="text-xs" style={{ color: 'var(--md-on-surface-variant)' }}>{sub}</div>
                    </div>
                  </div>
                )
                return href
                  ? <a key={label} href={href}
                       className="block transition-opacity duration-200 hover:opacity-80">
                      {inner}
                    </a>
                  : <div key={label}>{inner}</div>
              })}
            </div>
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            <div className="liquid-glass p-6 rounded-xl">
              <span className="block text-[10px] font-semibold uppercase tracking-widest mb-3"
                    style={{ color: 'var(--md-primary)' }}>Формат работы</span>
              <div className="flex flex-wrap gap-3">
                {formats.map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]" style={{ color: 'var(--md-primary)' }}>{icon}</span>
                    <span className="text-sm font-medium" style={{ color: 'var(--md-on-surface)' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="liquid-glass p-6 rounded-xl">
              <span className="block text-[10px] font-semibold uppercase tracking-widest mb-3"
                    style={{ color: 'var(--md-primary)' }}>Языки</span>
              <div className="flex flex-col gap-2">
                {[['Русский', 'Родной'], ['Английский', 'B1 — Средний']].map(([lang, level]) => (
                  <div key={lang} className="flex justify-between items-center">
                    <span className="text-sm" style={{ color: 'var(--md-on-surface)' }}>{lang}</span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{ background: 'color-mix(in srgb, var(--md-primary) 10%, transparent)', color: 'var(--md-primary)' }}>
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ icon, children }) {
  return (
    <div className="flex items-center gap-3 mb-6 reveal">
      <span className="material-symbols-outlined text-[22px]" style={{ color: 'var(--md-primary)' }}>{icon}</span>
      <h2 className="text-2xl font-semibold" style={{ color: 'var(--md-on-surface)' }}>{children}</h2>
      <div className="h-px flex-1" style={{ background: 'var(--glass-border)' }} />
    </div>
  )
}
