export default function Projects() {
  return (
    <section className="mb-20" id="projects">
      <SectionTitle icon="work_history">Проекты</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4" style={{ gridAutoRows: '260px' }}>

        {/* CRM — big card */}
        <div className="md:col-span-8 md:row-span-2 liquid-glass rounded-xl overflow-hidden group cursor-pointer relative reveal"
             style={{ minHeight: '520px' }}>
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
               style={{ backgroundImage: 'var(--crm-img)' }} />
          <div className="absolute inset-0 z-10"
               style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
          <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-3"
                  style={{ background: 'color-mix(in srgb, var(--md-primary) 20%, transparent)', color: 'var(--md-primary)', borderColor: 'color-mix(in srgb, var(--md-primary) 35%, transparent)' }}>
              🏆 ENIGMA HACK 2026 · 1 место
            </span>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#fff' }}>CRM с ИИ-помощником</h3>
            <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.68)' }}>
              Кроссплатформенная CRM-система на Flutter с встроенным локальным AI-агентом.
              Анализ переписки, генерация ответов, история взаимодействий с клиентами.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Flutter', 'Dart', 'LLM', 'AI Agent'].map(t => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* MCP + RAG */}
        <div className="md:col-span-4 liquid-glass rounded-xl p-7 flex flex-col justify-between reveal">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-[18px]" style={{ color: 'var(--md-primary)' }}>database</span>
              <h3 className="text-base font-semibold" style={{ color: 'var(--md-on-surface)' }}>MCP + RAG Pipeline</h3>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>
              Кастомный MCP-сервер, ChromaDB, Ollama. Векторная база + RAG-поиск по документам.
              Локальный деплой LLM-агента.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {['MCP', 'RAG', 'ChromaDB', 'Ollama', 'Python'].map(t => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'color-mix(in srgb, var(--md-primary) 10%, transparent)', color: 'var(--md-primary)' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Анализатор препаратов */}
        <div className="md:col-span-4 liquid-glass rounded-xl p-7 flex flex-col justify-between reveal">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-[18px]" style={{ color: 'var(--md-primary)' }}>biotech</span>
              <h3 className="text-base font-semibold" style={{ color: 'var(--md-on-surface)' }}>Анализатор препаратов</h3>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>
              Дипломная работа, УрФУ 2024. Computer Vision для распознавания и анализа
              составов лекарственных препаратов.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {['Flutter', 'Dart', 'CV', 'REST API'].map(t => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'color-mix(in srgb, var(--md-primary) 10%, transparent)', color: 'var(--md-primary)' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* CTF */}
        <div className="md:col-span-12 liquid-glass rounded-xl p-7 flex flex-col md:flex-row items-start md:items-center gap-6 reveal"
             style={{ height: 'auto', gridRow: 'auto' }}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
               style={{ background: 'color-mix(in srgb, var(--md-primary) 12%, transparent)' }}>
            <span className="material-symbols-outlined text-[28px]" style={{ color: 'var(--md-primary)', fontVariationSettings: "'FILL' 1" }}>
              shield_lock
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--md-on-surface)' }}>
              CTF — Хакердом 2025
            </h3>
            <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--md-on-surface-variant)' }}>
              Решение задач на эксплуатацию уязвимостей, криптографию и реверс-инжиниринг.
              Курс по компьютерной безопасности.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Security', 'CTF', 'Reverse Engineering', 'Linux', 'Crypto'].map(t => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: 'color-mix(in srgb, var(--md-primary) 10%, transparent)', color: 'var(--md-primary)' }}>{t}</span>
              ))}
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
