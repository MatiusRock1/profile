export type Lang = 'en' | 'es'

export type Content = {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    stack: string
    experience: string
    contact: string
    writeMe: string
    sectionsAria: string
    languageAria: string
  }
  hero: {
    hello: string
    role: string
    intro: string
    talk: string
    years: string
    remote: string
    thesis: string
  }
  about: {
    title: string
    p1: string
    p2: string
    note: string
    focus: string[]
  }
  stack: {
    title: string
    groups: { name: string; items: string[] }[]
  }
  experience: {
    title: string
    jobs: {
      company: string
      place: string
      period: string
      title: string
      points: string[]
    }[]
  }
  domain: {
    title: string
    cardTitle: string
    body: string
    items: string[]
    projectsAria: string
    educationTitle: string
    education: string[]
    projects: string[]
  }
  strengths: {
    title: string
    items: { title: string; text: string }[]
  }
  contact: {
    title: string
    body: string
  }
  footer: {
    email: string
  }
  shared: {
    name: string
    location: string
    email: string
    linkedin: string
    github: string
  }
}
