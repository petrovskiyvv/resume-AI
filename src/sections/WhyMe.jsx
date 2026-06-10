const points = [
  {
    icon: 'neurology',
    title: 'LLM на деле',
    text: 'Работаю с LLM не на словах: внедряю в реальные пайплайны и бизнес-процессы.',
  },
  {
    icon: 'architecture',
    title: 'Архитектура',
    text: 'Понимаю архитектуру современных нейросетей и способы их эффективной интеграции.',
  },
  {
    icon: 'package_2',
    title: 'AI в продукт',
    text: 'Могу не только написать скрипт, но и завернуть AI-решение в готовый программный продукт.',
  },
  {
    icon: 'security',
    title: 'Безопасность',
    text: 'Думаю о безопасности данных и контролируемом доступе к моделям (On-premise).',
  },
]

export default function WhyMe() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-32">
      {points.map((p, i) => (
        <div key={p.title} className="liquid-glass p-8 rounded-xl flex flex-col gap-4 reveal"
             style={{ transitionDelay: `${i * 80}ms` }}>
          <span className="material-symbols-outlined text-4xl" style={{ color: 'var(--md-primary)', fontVariationSettings: "'FILL' 1" }}>
            {p.icon}
          </span>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--md-on-surface)' }}>{p.title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>{p.text}</p>
        </div>
      ))}
    </section>
  )
}
