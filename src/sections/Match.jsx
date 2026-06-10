// Требования вакансии → доказательства кандидата
const matches = [
  {
    level: 'strong', // strong | partial
    requirement: 'Опыт ИИ-автоматизации: боты, скрипты, интеграции',
    proof: 'CRM с AI-ассистентом (ENIGMA HACK 2026, 1 место) + MCP-сервер с RAG-пайплайном на ChromaDB/Ollama',
    proofIcons: ['emoji_events', 'hub'],
  },
  {
    level: 'strong',
    requirement: 'RAG — поиск по внутренней базе знаний',
    proof: 'Реализован полный RAG-стек: ChromaDB, векторизация документов, Ollama для локального инференса',
    proofIcons: ['database', 'search'],
  },
  {
    level: 'strong',
    requirement: 'Чат-боты и внутренние ИИ-ассистенты',
    proof: 'AI-агент в CRM: анализ переписки, генерация ответов менеджерам, история взаимодействий',
    proofIcons: ['smart_toy', 'chat'],
  },
  {
    level: 'strong',
    requirement: 'Интеграция через API (внутренние системы)',
    proof: 'MCP-серверы для расширения контекста LLM, REST API в дипломном проекте, настройка CLI-окружения',
    proofIcons: ['api', 'settings_input_antenna'],
  },
  {
    level: 'strong',
    requirement: 'Python, SQL — базовое понимание',
    proof: 'Python — основной язык для AI-скриптов и пайплайнов; SQL/MySQL — в стеке, использую в проектах',
    proofIcons: ['code', 'storage'],
  },
  {
    level: 'strong',
    requirement: 'Профильное образование (матмех, прикладная математика)',
    proof: 'Магистр УрФУ, Институт математики и компьютерных наук (МОАИС) — прямое совпадение',
    proofIcons: ['school', 'calculate'],
  },
  {
    level: 'partial',
    requirement: 'Автоматизация отчётов и аналитических дайджестов',
    proof: 'Опыт через LLM-агентов: генерация текстовых сводок, обработка структурированных данных',
    proofIcons: ['summarize', 'bar_chart'],
  },
  {
    level: 'partial',
    requirement: 'Обработка документов (счета, договоры, накладные)',
    proof: 'Опыт с Computer Vision (дипломный проект) + понимание RAG для document Q&A',
    proofIcons: ['description', 'document_scanner'],
  },
]

const keySkills = [
  { label: 'LLM', match: true },
  { label: 'RAG', match: true },
  { label: 'Python', match: true },
  { label: 'SQL', match: true },
  { label: 'API', match: true },
  { label: 'AI Automation', match: true },
  { label: 'IT', match: true },
  { label: 'Деловое общение', match: true },
  { label: 'FoodTech', match: false },
  { label: 'MS PowerPoint', match: false },
]

export default function Match() {
  const strongCount = matches.filter(m => m.level === 'strong').length
  const totalCount = matches.length
  const pct = Math.round((strongCount / totalCount) * 100)

  return (
    <section className="mb-20" id="match">
      <SectionTitle icon="target">Соответствие вакансии — Goulash.tech</SectionTitle>

      {/* Summary card */}
      <div className="liquid-glass rounded-xl p-7 mb-6 reveal">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Score ring */}
          <div className="flex-shrink-0 flex flex-col items-center gap-1">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" fill="none" strokeWidth="6"
                        style={{ stroke: 'var(--glass-border)' }} />
                <circle cx="40" cy="40" r="34" fill="none" strokeWidth="6"
                        strokeLinecap="round"
                        style={{ stroke: 'var(--md-primary)' }}
                        strokeDasharray={`${2 * Math.PI * 34}`}
                        strokeDashoffset={`${2 * Math.PI * 34 * (1 - pct / 100)}`} />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-bold"
                    style={{ color: 'var(--md-primary)' }}>{pct}%</span>
            </div>
            <span className="text-[10px] uppercase tracking-wider font-medium text-center"
                  style={{ color: 'var(--md-on-surface-variant)' }}>совпадение</span>
          </div>

          <div className="flex-1">
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--md-on-surface-variant)' }}>
              <span className="font-semibold" style={{ color: 'var(--md-on-surface)' }}>
                {strongCount} из {totalCount}
              </span>&nbsp;
              ключевых требований закрыты прямым опытом. Матмех УрФУ и проекты на LLM/RAG/MCP
              точно совпадают с задачами команды. Нет коммерческого опыта в FoodTech — готов
              компенсировать скоростью вхождения в домен.
            </p>
            {/* Key skills chips */}
            <div className="flex flex-wrap gap-2">
              {keySkills.map(({ label, match }) => (
                <span key={label}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                      style={match
                        ? { background: 'color-mix(in srgb, var(--md-primary) 12%, transparent)', color: 'var(--md-primary)' }
                        : { background: 'var(--glass-bg)', color: 'var(--md-on-surface-variant)' }}>
                  <span className="material-symbols-outlined text-[12px]">{match ? 'check_circle' : 'radio_button_unchecked'}</span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Match rows */}
      <div className="flex flex-col gap-3">
        {matches.map((m, i) => (
          <div key={i}
               className="liquid-glass rounded-xl overflow-hidden reveal"
               style={{ transitionDelay: `${i * 55}ms` }}>
            <div className="flex items-stretch">
              {/* Level bar */}
              <div className="w-1 flex-shrink-0 rounded-l-xl"
                   style={{ background: m.level === 'strong' ? 'var(--md-primary)' : 'var(--md-tertiary)' }} />

              <div className="flex-1 p-5 flex flex-col md:flex-row md:items-start gap-4">
                {/* Requirement */}
                <div className="md:w-2/5 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full`}
                          style={m.level === 'strong'
                            ? { background: 'color-mix(in srgb, var(--md-primary) 12%, transparent)', color: 'var(--md-primary)' }
                            : { background: 'color-mix(in srgb, var(--md-tertiary) 12%, transparent)', color: 'var(--md-tertiary)' }}>
                      {m.level === 'strong' ? 'Прямое совпадение' : 'Частичное совпадение'}
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-snug" style={{ color: 'var(--md-on-surface)' }}>
                    {m.requirement}
                  </p>
                </div>

                {/* Arrow */}
                <span className="material-symbols-outlined text-[18px] hidden md:block mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--md-outline)' }}>arrow_forward</span>

                {/* Proof */}
                <div className="flex-1">
                  <div className="flex items-start gap-2">
                    <div className="flex gap-1.5 flex-shrink-0 mt-0.5">
                      {m.proofIcons.map(ic => (
                        <span key={ic} className="material-symbols-outlined text-[16px]"
                              style={{ color: 'var(--md-primary)' }}>{ic}</span>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>
                      {m.proof}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
