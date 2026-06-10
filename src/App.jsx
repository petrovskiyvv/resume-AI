import { useState, useEffect } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Match from './sections/Match'
import Stack from './sections/Stack'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contacts from './sections/Contacts'

const NAV = [
  { id: 'about',     label: 'Обо мне' },
  { id: 'match',     label: 'Вакансия' },
  { id: 'stack',     label: 'Стек' },
  { id: 'projects',  label: 'Проекты' },
  { id: 'education', label: 'Образование' },
  { id: 'contact',   label: 'Контакты' },
]

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="noise-overlay" />
      <div className="fixed inset-0 radial-bg -z-10 pointer-events-none" />

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-[20px] backdrop-saturate-[180%] border-b"
           style={{ borderColor: 'var(--glass-border)' }}>
        <div className="flex justify-between items-center px-5 md:px-20 h-16 max-w-[1200px] mx-auto">

          <span className="text-sm font-semibold tracking-wide" style={{ color: 'var(--md-on-surface)' }}>
            Владислав Петровский
          </span>

          <div className="hidden md:flex gap-6 items-center">
            {NAV.map(({ id, label }) => (
              <a key={id} href={`#${id}`}
                 className="text-sm transition-colors duration-200"
                 style={{ color: 'var(--md-on-surface-variant)' }}
                 onMouseEnter={e => e.target.style.color = 'var(--md-on-surface)'}
                 onMouseLeave={e => e.target.style.color = 'var(--md-on-surface-variant)'}>
                {label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Переключить тему">
            <span className="material-symbols-outlined text-[18px]" style={{ color: 'var(--md-primary)' }}>
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-5 md:px-20 max-w-[1200px] mx-auto">
        <Hero />
        <About />
        <Match />
        <Stack />
        <Projects />
        <Education />
        <Contacts />
      </main>

      <footer className="w-full py-8 border-t" style={{ borderColor: 'var(--glass-border)', backgroundColor: 'var(--md-surface-container-lowest)' }}>
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-20 max-w-[1200px] mx-auto gap-4">
          <p className="text-xs" style={{ color: 'var(--md-on-surface-variant)' }}>
            © 2025 Владислав Петровский
          </p>
          <div className="flex gap-6">
            {[['mailto:petrovskiyvv@mail.ru','Email'],['https://t.me/petrovskiyvv','Telegram'],['#','GitHub']].map(([href, label]) => (
              <a key={label} href={href}
                 className="text-xs transition-colors duration-300"
                 style={{ color: 'var(--md-on-surface-variant)' }}
                 onMouseEnter={e => e.target.style.color = 'var(--md-primary)'}
                 onMouseLeave={e => e.target.style.color = 'var(--md-on-surface-variant)'}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
