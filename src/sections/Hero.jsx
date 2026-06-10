const contacts = [
  { icon: 'mail',        text: 'petrovskiyvv@mail.ru',    href: 'mailto:petrovskiyvv@mail.ru' },
  { icon: 'send',        text: 'Telegram',                  href: 'https://t.me/petrovskiyvv' },
  { icon: 'location_on', text: 'Екатеринбург',              href: null },
]

const formats = ['Удалённо', 'Гибрид', 'Офис']

export default function Hero() {
  return (
    <section className="mb-20 reveal">
      <div className="liquid-glass rounded-3xl p-10 md:p-14 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none blur-[100px]"
             style={{ background: 'var(--radial-primary)' }} />

        <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          {/* Left: name + title + contacts */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--md-on-surface-variant)' }}>
                Открыт к предложениям
              </span>
            </div>

            <h1 className="text-[42px] md:text-[56px] font-bold leading-none mb-3 tracking-[-0.02em]"
                style={{ color: 'var(--md-on-surface)' }}>
              Владислав Петровский
            </h1>

            <p className="text-xl font-medium mb-6" style={{ color: 'var(--md-primary)' }}>
              AI Developer · AI Automation Engineer
            </p>

            <div className="flex flex-wrap gap-3">
              {contacts.map(({ icon, text, href }) => {
                const inner = (
                  <>
                    <span className="material-symbols-outlined text-[16px]" style={{ color: 'var(--md-primary)' }}>{icon}</span>
                    <span className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>{text}</span>
                  </>
                )
                return href
                  ? <a key={text} href={href}
                       className="liquid-glass flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105">
                      {inner}
                    </a>
                  : <span key={text} className="liquid-glass flex items-center gap-2 px-4 py-2 rounded-full">
                      {inner}
                    </span>
              })}
            </div>
          </div>

          {/* Right: availability / format cards */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <div className="liquid-glass p-4 rounded-xl">
              <span className="block text-[10px] font-medium uppercase tracking-widest mb-2"
                    style={{ color: 'var(--md-primary)' }}>Формат работы</span>
              <div className="flex flex-wrap gap-2">
                {formats.map(f => (
                  <span key={f}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: 'color-mix(in srgb, var(--md-primary) 12%, transparent)', color: 'var(--md-primary)' }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="liquid-glass p-4 rounded-xl">
              <span className="block text-[10px] font-medium uppercase tracking-widest mb-3"
                    style={{ color: 'var(--md-primary)' }}>Образование</span>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] flex-shrink-0"
                        style={{ color: 'var(--md-primary)', fontVariationSettings: "'FILL' 1" }}>school</span>
                  <div>
                    <span className="text-xs font-semibold block" style={{ color: 'var(--md-on-surface)' }}>Магистр · в процессе</span>
                    <span className="text-[11px]" style={{ color: 'var(--md-on-surface-variant)' }}>УрФУ мат-мех, 2026</span>
                  </div>
                </div>
                <div className="h-px w-full" style={{ background: 'var(--glass-border)' }} />
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] flex-shrink-0"
                        style={{ color: 'var(--md-tertiary)', fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                  <div>
                    <span className="text-xs font-semibold block" style={{ color: 'var(--md-on-surface)' }}>Бакалавр · диплом</span>
                    <span className="text-[11px]" style={{ color: 'var(--md-on-surface-variant)' }}>УрФУ мат-мех, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
