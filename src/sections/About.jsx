const highlights = [
  {
    icon: 'neurology',
    title: 'LLM на деле',
    text: 'RAG-пайплайны, MCP-серверы, локальный деплой через Ollama — не теория, а реальные интеграции в рабочие продукты.',
  },
  {
    icon: 'architecture',
    title: 'Архитектура моделей',
    text: 'Понимаю устройство трансформеров, механизм attention, принципы fine-tuning и prompt engineering на уровне архитектуры.',
  },
  {
    icon: 'emoji_events',
    title: 'Хакатоны',
    text: 'Победитель ENIGMA HACK 2026. Регулярно участвую в соревнованиях — это лучшая школа принятия решений под давлением.',
  },
  {
    icon: 'security',
    title: 'Кибербезопасность',
    text: 'CTF-соревнования, курс Хакердома — понимаю векторы атак на AI-системы: prompt injection, data poisoning, утечки системных промптов.',
  },
]

const timeline = [
  {
    year: '2026',
    icon: 'emoji_events',
    accent: 'primary',
    title: '1 место — ENIGMA HACK 2026',
    text: 'За 48 часов в команде реализовал полноценную CRM-систему с интегрированным ИИ-агентом на базе локальной LLM. Агент анализировал переписку с клиентами и предлагал менеджерам готовые ответы и следующие шаги.',
  },
  {
    year: '2025',
    icon: 'shield_lock',
    accent: 'tertiary',
    title: 'CTF — Хакердом 2025',
    text: 'Прошёл профильный курс по компьютерной безопасности и участвовал в CTF-соревнованиях: задачи на реверс-инжиниринг, web-уязвимости, криптографию и форензику. Практическое понимание безопасности кода и сетевых протоколов.',
  },
  {
    year: '2024',
    icon: 'science',
    accent: 'primary',
    title: 'Дипломная работа — Computer Vision',
    text: 'Разработал клиентскую часть кроссплатформенного Flutter-приложения для анализа лекарственных препаратов. Интеграция с CV-моделью через REST API, локальное кеширование, UX для медицинского контекста.',
  },
  {
    year: '2024',
    icon: 'hub',
    accent: 'tertiary',
    title: 'MCP-сервер + RAG-пайплайн',
    text: 'Построил кастомный MCP-сервер (Model Context Protocol) для расширения контекста LLM-агента. Векторная база на ChromaDB, RAG-поиск по корпусу документов, локальный инференс через Ollama.',
  },
]

export default function About() {
  const accentColor = a => a === 'primary' ? 'var(--md-primary)' : 'var(--md-tertiary)'

  return (
    <section className="mb-20" id="about">
      <SectionTitle icon="person">Обо мне</SectionTitle>

      {/* Main bio */}
      <div className="liquid-glass rounded-xl p-8 md:p-10 mb-5 reveal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 flex flex-col gap-4">
            <p className="text-base leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>
              Имею два высших образования на мат-мехе УрФУ (МОАИС) —{' '}
              <span className="font-semibold" style={{ color: 'var(--md-tertiary)' }}>бакалавр 2024</span>
              {' '}и продолжающаяся{' '}
              <span className="font-semibold" style={{ color: 'var(--md-primary)' }}>магистратура 2026</span>.
              Специализация — на стыке математики, программной инженерии и прикладного ИИ.
              Не просто использую LLM-инструменты, а понимаю, как они устроены изнутри:
              трансформерная архитектура, механизм attention, способы управления контекстом.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>
              Активно участвую в хакатонах — это среда, где нужно быстро
              декомпозировать задачу, выбрать технологический стек и довести решение до
              работающего продукта. Победа на{' '}
              <span className="font-semibold" style={{ color: 'var(--md-primary)' }}>ENIGMA HACK 2026</span>
              {' '}— результат именно такого подхода.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>
              Параллельно развиваюсь в кибербезопасности через CTF-соревнования: это даёт
              системное понимание уязвимостей, которое напрямую применяется при проектировании
              надёжных AI-систем — особенно в части prompt injection и защиты данных.
              Слежу за research-сообществом: читаю arxiv, тестирую новые модели и инструменты.
            </p>
          </div>

          {/* Stats column */}
          <div className="flex flex-col gap-3">
            {[
              { icon: 'emoji_events',     value: '1 место',      label: 'ENIGMA HACK 2026',     accent: 'primary' },
              { icon: 'workspace_premium',value: 'Бакалавр',     label: 'УрФУ мат-мех, 2024',   accent: 'tertiary' },
              { icon: 'school',           value: 'Магистратура', label: 'УрФУ мат-мех, 2026',   accent: 'primary' },
              { icon: 'hub',              value: 'RAG + MCP',    label: 'Собственные пайплайны', accent: 'primary' },
              { icon: 'shield_lock',      value: 'CTF',          label: 'Хакердом 2025',         accent: 'tertiary' },
            ].map(({ icon, value, label, accent }) => (
              <div key={label}
                   className="flex items-center gap-3 px-4 py-3 rounded-xl"
                   style={{ background: `color-mix(in srgb, ${accentColor(accent)} 6%, transparent)` }}>
                <span className="material-symbols-outlined text-[20px] flex-shrink-0"
                      style={{ color: accentColor(accent), fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                <div>
                  <div className="text-sm font-semibold leading-none mb-0.5" style={{ color: 'var(--md-on-surface)' }}>{value}</div>
                  <div className="text-xs" style={{ color: 'var(--md-on-surface-variant)' }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="liquid-glass rounded-xl overflow-hidden mb-5 reveal" style={{ transitionDelay: '80ms' }}>
        <div className="px-7 py-5 border-b flex items-center gap-3" style={{ borderColor: 'var(--glass-border)' }}>
          <span className="material-symbols-outlined text-[18px]" style={{ color: 'var(--md-primary)' }}>timeline</span>
          <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--md-primary)' }}>
            Ключевые события
          </h3>
        </div>
        <div className="px-7 py-6 flex flex-col gap-0">
          {timeline.map((t, i) => (
            <div key={t.title} className="flex gap-5 reveal" style={{ transitionDelay: `${120 + i * 70}ms` }}>
              {/* Spine */}
              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                     style={{ background: `color-mix(in srgb, ${accentColor(t.accent)} 14%, transparent)` }}>
                  <span className="material-symbols-outlined text-[16px]"
                        style={{ color: accentColor(t.accent), fontVariationSettings: "'FILL' 1" }}>
                    {t.icon}
                  </span>
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 my-2" style={{ background: 'var(--glass-border)' }} />
                )}
              </div>

              {/* Content */}
              <div className={i < timeline.length - 1 ? 'pb-6' : 'pb-0'}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold" style={{ color: accentColor(t.accent) }}>{t.year}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--md-on-surface)' }}>{t.title}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlight cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((h, i) => (
          <div key={h.title}
               className="liquid-glass p-6 rounded-xl flex flex-col gap-3 reveal"
               style={{ transitionDelay: `${i * 65}ms` }}>
            <span className="material-symbols-outlined text-[30px]"
                  style={{ color: 'var(--md-primary)', fontVariationSettings: "'FILL' 1" }}>
              {h.icon}
            </span>
            <h3 className="text-sm font-semibold" style={{ color: 'var(--md-on-surface)' }}>{h.title}</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>{h.text}</p>
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
