const categories = [
  { icon: 'smart_toy',  title: 'AI / LLM',    items: ['MCP', 'RAG', 'Prompt Engineering', 'Fine-tuning', 'LangChain', 'Ollama', 'LM Studio'] },
  { icon: 'code',       title: 'Разработка',   items: ['Flutter', 'Dart', 'Python', 'JavaScript', 'React'] },
  { icon: 'dns',        title: 'Инфра',        items: ['Docker', 'Linux', 'Git', 'SQL', 'MySQL', 'ChromaDB'] },
  { icon: 'terminal',   title: 'Практики',     items: ['ООП', 'SOLID', 'CTF', 'CI/CD', 'Agile'] },
]

export default function Stack() {
  return (
    <section className="mb-20" id="stack">
      <SectionTitle icon="layers">Стек и инструменты</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <div key={cat.title}
               className="liquid-glass p-6 rounded-xl reveal"
               style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-[20px]" style={{ color: 'var(--md-primary)' }}>{cat.icon}</span>
              <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--md-on-surface)' }}>{cat.title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map(item => (
                <span key={item}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: 'color-mix(in srgb, var(--md-primary) 10%, transparent)', color: 'var(--md-primary)' }}>
                  {item}
                </span>
              ))}
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
