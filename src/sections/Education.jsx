const courses = [
  { year: '2025', title: 'Курс по компьютерной безопасности',  org: 'Хакердом' },
  { year: '2024', title: 'Алгоритмы и структуры данных',        org: 'Тинькофф Образование' },
  { year: '2024', title: 'Промышленная разработка на Java',      org: 'Naumen' },
  { year: '2024', title: 'Контроль качества ПО',                org: 'Naumen' },
  { year: '2023', title: 'Администрирование Linux',              org: 'УрФУ' },
  { year: '2023', title: 'Разработка веб-приложений',            org: 'Яндекс' },
]

export default function Education() {
  return (
    <section className="mb-20" id="education">
      <SectionTitle icon="school">Образование</SectionTitle>

      {/* Degrees — two big equal cards side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

        {/* Master */}
        <div className="liquid-glass rounded-2xl overflow-hidden reveal" style={{ transitionDelay: '0ms' }}>
          {/* coloured top bar */}
          <div className="h-1.5 w-full" style={{ background: 'var(--md-primary)' }} />
          <div className="p-8">
            <div className="flex items-start justify-between gap-3 mb-5">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ background: 'color-mix(in srgb, var(--md-primary) 14%, transparent)' }}>
                <span className="material-symbols-outlined text-[28px]"
                      style={{ color: 'var(--md-primary)', fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: 'color-mix(in srgb, var(--md-primary) 12%, transparent)', color: 'var(--md-primary)' }}>
                  2026
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: 'color-mix(in srgb, #4caf50 14%, transparent)', color: '#4caf50' }}>
                  В процессе
                </span>
              </div>
            </div>

            <p className="text-xl font-bold mb-1" style={{ color: 'var(--md-on-surface)' }}>Магистр</p>
            <p className="text-sm font-medium mb-3" style={{ color: 'var(--md-primary)' }}>
              Математик-программист
            </p>
            <p className="text-sm leading-snug mb-1" style={{ color: 'var(--md-on-surface)' }}>
              Уральский федеральный университет
            </p>
            <p className="text-xs leading-snug" style={{ color: 'var(--md-on-surface-variant)' }}>
              Институт математики и компьютерных наук
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--md-on-surface-variant)' }}>
              МОАИС — Математическое обеспечение<br/>и администрирование ИС
            </p>
          </div>
        </div>

        {/* Bachelor */}
        <div className="liquid-glass rounded-2xl overflow-hidden reveal" style={{ transitionDelay: '100ms' }}>
          <div className="h-1.5 w-full" style={{ background: 'var(--md-tertiary)' }} />
          <div className="p-8">
            <div className="flex items-start justify-between gap-3 mb-5">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ background: 'color-mix(in srgb, var(--md-tertiary) 14%, transparent)' }}>
                <span className="material-symbols-outlined text-[28px]"
                      style={{ color: 'var(--md-tertiary)', fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: 'color-mix(in srgb, var(--md-tertiary) 12%, transparent)', color: 'var(--md-tertiary)' }}>
                2024
              </span>
            </div>

            <p className="text-xl font-bold mb-1" style={{ color: 'var(--md-on-surface)' }}>Бакалавр</p>
            <p className="text-sm font-medium mb-3" style={{ color: 'var(--md-tertiary)' }}>
              Математик-программист
            </p>
            <p className="text-sm leading-snug mb-1" style={{ color: 'var(--md-on-surface)' }}>
              Уральский федеральный университет
            </p>
            <p className="text-xs leading-snug" style={{ color: 'var(--md-on-surface-variant)' }}>
              Институт математики и компьютерных наук
            </p>
            <p className="text-xs mt-3 leading-relaxed"
               style={{ color: 'var(--md-on-surface-variant)', borderLeft: '2px solid var(--md-tertiary)', paddingLeft: '10px' }}>
              Дипломная работа: «Разработка клиентской части кроссплатформенного приложения
              для анализа лекарственных препаратов» (Flutter)
            </p>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="liquid-glass rounded-xl overflow-hidden reveal" style={{ transitionDelay: '180ms' }}>
        <div className="px-7 py-5 flex items-center gap-3 border-b" style={{ borderColor: 'var(--glass-border)' }}>
          <span className="material-symbols-outlined text-[18px]" style={{ color: 'var(--md-primary)' }}>menu_book</span>
          <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--md-primary)' }}>
            Курсы и повышение квалификации
          </h3>
        </div>
        {courses.map((c, i) => (
          <div key={c.title}
               className="flex items-center gap-4 px-7 py-4 reveal"
               style={{
                 transitionDelay: `${220 + i * 50}ms`,
                 borderBottom: i < courses.length - 1 ? '1px solid var(--glass-border)' : 'none',
               }}>
            <span className="text-xs font-mono font-bold w-10 flex-shrink-0"
                  style={{ color: 'var(--md-primary)' }}>{c.year}</span>
            <span className="text-sm flex-1" style={{ color: 'var(--md-on-surface)' }}>{c.title}</span>
            <span className="text-xs hidden sm:block px-2.5 py-0.5 rounded-full flex-shrink-0"
                  style={{ background: 'color-mix(in srgb, var(--md-primary) 8%, transparent)', color: 'var(--md-on-surface-variant)' }}>
              {c.org}
            </span>
          </div>
        ))}
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
