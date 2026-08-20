import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLanguage } from './i18n/LanguageContext'
import type { Lang } from './i18n/types'
import './App.css'

const SECTION_IDS = ['about', 'stack', 'experience', 'contact'] as const
type SectionId = (typeof SECTION_IDS)[number]

function isSectionId(value: string): value is SectionId {
  return (SECTION_IDS as readonly string[]).includes(value)
}

function joinList(items: readonly string[]) {
  return items.join(' · ')
}

function App() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (typeof window === 'undefined') return ''
    const hash = window.location.hash.replace(/^#/, '')
    return isSectionId(hash) ? hash : ''
  })
  const pinnedUntil = useRef(0)
  const pinnedId = useRef<string | null>(null)
  const { shared } = t

  const navItems = useMemo(
    () => [
      { id: 'about', label: t.nav.about },
      { id: 'stack', label: t.nav.stack },
      { id: 'experience', label: t.nav.experience },
      { id: 'contact', label: t.nav.contact },
    ],
    [t.nav.about, t.nav.stack, t.nav.experience, t.nav.contact],
  )

  const pinSection = useCallback((id: string, ms = 1000) => {
    if (!isSectionId(id)) return
    pinnedId.current = id
    pinnedUntil.current = performance.now() + ms
    setActiveSection(id)
  }, [])

  useEffect(() => {
    const getMarker = () => {
      const nav = document.querySelector('.nav')
      const navH = nav instanceof HTMLElement ? nav.getBoundingClientRect().height : 68
      return Math.max(72, navH + 12)
    }

    const updateFromScroll = () => {
      setScrolled(window.scrollY > 8)

      if (pinnedId.current && performance.now() < pinnedUntil.current) {
        setActiveSection(pinnedId.current)
        return
      }
      pinnedId.current = null

      const marker = getMarker()
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll > 0 && window.scrollY >= maxScroll - 12) {
        setActiveSection('contact')
        return
      }

      // Last nav section whose top has crossed under the sticky header.
      // Domain/strengths keep Experience active until Contact.
      let current = ''
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top - marker <= 1) current = id
      }
      setActiveSection(current)
    }

    const onHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '')
      if (isSectionId(hash)) pinSection(hash)
      else updateFromScroll()
    }

    const initialHash = window.location.hash.replace(/^#/, '')
    if (isSectionId(initialHash)) pinSection(initialHash, 1200)

    updateFromScroll()
    const raf = window.requestAnimationFrame(updateFromScroll)
    const t1 = window.setTimeout(updateFromScroll, 150)
    const t2 = window.setTimeout(updateFromScroll, 450)

    window.addEventListener('scroll', updateFromScroll, { passive: true })
    window.addEventListener('resize', updateFromScroll)
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('scrollend', updateFromScroll)
    return () => {
      window.cancelAnimationFrame(raf)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.removeEventListener('scroll', updateFromScroll)
      window.removeEventListener('resize', updateFromScroll)
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('scrollend', updateFromScroll)
    }
  }, [pinSection])

  const onNavClick = (id: string) => {
    pinSection(id)
  }

  return (
    <div className="site">
      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <div className="wrap nav__inner">
          <a className="nav__brand" href="#top">
            <img
              className="nav__logo"
              src="/isotype.png"
              alt=""
              width={36}
              height={36}
              decoding="async"
            />
            <span>{shared.name}</span>
          </a>
          <nav className="nav__links" aria-label={t.nav.sectionsAria}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'is-active' : undefined}
                aria-current={activeSection === item.id ? 'true' : undefined}
                onClick={() => onNavClick(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav__end">
            <div className="lang" role="group" aria-label={t.nav.languageAria}>
              {(['en', 'es'] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  className={`lang__btn${lang === code ? ' is-active' : ''}`}
                  aria-pressed={lang === code}
                  onClick={() => setLang(code as Lang)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <a className="nav__cta" href={`mailto:${shared.email}`}>
              {t.nav.writeMe}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <p className="hero__hello">{t.hero.hello}</p>
              <h1>{shared.name}</h1>
              <p className="hero__role">{t.hero.role}</p>
              <p className="hero__intro">{t.hero.intro}</p>
              <div className="hero__actions">
                <a className="btn btn--primary" href={`mailto:${shared.email}`}>
                  {t.hero.talk}
                </a>
                <a
                  className="btn btn--ghost"
                  href={shared.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="btn btn--ghost"
                  href={shared.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="hero__meta">
                <span>{shared.location}</span>
                <span>{t.hero.years}</span>
                <span>{t.hero.remote}</span>
              </div>
            </div>

            <aside className="hero__photo">
              <figure>
                <img src="/portrait.jpg" alt={shared.name} />
                <figcaption>{t.hero.thesis}</figcaption>
              </figure>
            </aside>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap">
            <h2 className="section__title">{t.about.title}</h2>
            <div className="prose">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <div className="note">{t.about.note}</div>
            </div>
            <ul className="focus">
              {t.about.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="stack">
          <div className="wrap">
            <h2 className="section__title">{t.stack.title}</h2>
            <div className="stack">
              {t.stack.groups.map((group) => (
                <article key={group.name}>
                  <h3>{group.name}</h3>
                  <p>{joinList(group.items)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="wrap">
            <h2 className="section__title">{t.experience.title}</h2>
            <div className="jobs">
              {t.experience.jobs.map((job) => (
                <article className="job" key={`${job.company}-${job.period}`}>
                  <div className="job__when">
                    <div>{job.period}</div>
                    <div>{job.place}</div>
                  </div>
                  <div>
                    <h3>{job.company}</h3>
                    <p className="job__title">{job.title}</p>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="domain">
          <div className="wrap">
            <h2 className="section__title">{t.domain.title}</h2>
            <div className="split">
              <div className="card">
                <h3>{t.domain.cardTitle}</h3>
                <p>{t.domain.body}</p>
                <ul className="tags">
                  {t.domain.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="projects" aria-label={t.domain.projectsAria}>
                  {t.domain.projects.map((project) => (
                    <span key={project}>{project}</span>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3>{t.domain.educationTitle}</h3>
                <ul className="tags">
                  {t.domain.education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="strengths">
          <div className="wrap">
            <h2 className="section__title">{t.strengths.title}</h2>
            <div className="strengths">
              {t.strengths.items.map((item) => (
                <article className="strength" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap" id="contact">
          <div className="contact">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.body}</p>
            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${shared.email}`}>
                {shared.email}
              </a>
              <a
                className="btn btn--ghost"
                href={shared.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="btn btn--ghost"
                href={shared.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <p className="contact__meta">{shared.location}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <span>
            © {new Date().getFullYear()} {shared.name}
          </span>
          <div className="footer__links">
            <a href={shared.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={shared.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`mailto:${shared.email}`}>{t.footer.email}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
