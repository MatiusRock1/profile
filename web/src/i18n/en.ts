import type { Content } from './types'

export const en: Content = {
  meta: {
    title: 'Jorge Trujillo',
    description:
      'Jorge Trujillo — backend and DevOps engineer. APIs, cloud, and fintech systems in production.',
  },
  nav: {
    about: 'About',
    stack: 'Stack',
    experience: 'Experience',
    contact: 'Contact',
    writeMe: 'Contact me',
    sectionsAria: 'Sections',
    languageAria: 'Language',
  },
  hero: {
    hello: "Hi, I'm",
    role: 'Backend · DevOps · AI / Fintech',
    intro:
      'I like building services that ship to production and stay operable: APIs, integrations, CI/CD, and cloud. Lately I work a lot on fintech, payments, KYC, and AI agents that are already live.',
    talk: "Let's talk",
    years: '9+ years of experience',
    remote: 'LeapFinancial · remote',
    thesis:
      "I don't stop at the code: I take it to production, watch it, and fix it when it breaks.",
  },
  about: {
    title: 'A bit about me',
    p1: 'Software engineer focused on Backend and DevOps, with 9+ years of experience. I combine API and microservice development with infrastructure automation, CI/CD, and cloud operations. Today I work as Senior Backend Developer & AI Solutions Engineer at LeapFinancial, designing payment pipelines, card onboarding, and production AI agents.',
    p2: 'Before going deep into backend and cloud, I worked in QA, project management, and technical account management. That mix helps me talk to the business, understand the full problem, and not get stuck only at the code layer.',
    note: 'I fit best in hybrid roles: backend with real ownership of deployment, operations, and integrations.',
    focus: [
      'Backend Development',
      'DevOps & CI/CD',
      'Cloud Engineering (GCP)',
      'Infrastructure as Code',
      'Microservices & REST APIs',
      'Observability',
      'Fintech integrations',
      'KYC & onboarding',
      'Production AI agents',
    ],
  },
  stack: {
    title: 'What I work with',
    groups: [
      {
        name: 'Backend',
        items: ['Node.js', 'NestJS', 'TypeScript', 'Python', 'REST APIs', 'Swagger / OpenAPI'],
      },
      {
        name: 'Data',
        items: ['MongoDB', 'Mongoose', 'Redis', 'Google Cloud Storage'],
      },
      {
        name: 'DevOps / CI/CD',
        items: ['Docker', 'GitHub Actions', 'Terraform', 'Doppler', 'Railway', 'Nginx', 'Linux'],
      },
      {
        name: 'Cloud',
        items: [
          'Google Cloud Run',
          'Artifact Registry',
          'Secret Manager',
          'VPC / Connectors',
          'IAM',
          'Service Accounts',
        ],
      },
      {
        name: 'Observability',
        items: ['Pino / nestjs-pino', 'Loki', 'Structured logging', 'Troubleshooting'],
      },
      {
        name: 'AI / Agents',
        items: ['OpenAI', 'Gemini', 'OpenRouter', 'Tool calling', 'Agentic workflows'],
      },
      {
        name: 'Fintech',
        items: ['Open Banking', 'Visa / Mastercard', 'VGS Proxy', 'AVS / ANI', 'PCI-sensitive flows'],
      },
    ],
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        company: 'LeapFinancial',
        place: 'Miami, FL (Remote)',
        period: 'May 2023 — Present',
        title: 'Senior Backend Developer & AI Solutions Engineer',
        points: [
          'Architected card onboarding and validation pipelines integrating VGS Proxy, Visa, Mastercard, and Cross River Bank (AVS, ANI, capability checks).',
          'Designed and shipped 6 production AI agents (remittances and Open Banking) with OpenAI, Gemini, and OpenRouter, multi-step tool calling, and API integrations.',
          'Node.js/Python microservices with Redis, secrets via Doppler, and CI/CD with GitHub Actions to Google Cloud Run and Railway.',
        ],
      },
      {
        company: 'SunDevs',
        place: 'Bogotá, Colombia',
        period: 'Feb 2017 — May 2023',
        title: 'Backend Developer · IT PM · TAM · QA',
        points: [
          'Backend: secure REST APIs, payment connectors, and microservices in Node.js and Python.',
          'Solutions Architect / Tech Lead for Cinemark LATAM across 6 countries: unified pricing and multi-tenant rules for apps, web, and kiosks on the Vista engine.',
          'Project Manager for teams of up to 7 people: roadmap, stakeholders, sprints, and delivery.',
          'QA Engineer: manual and automated test plans for enterprise platforms.',
        ],
      },
      {
        company: 'Clínica Sharon y UCI Tolima',
        place: 'Ibagué, Colombia',
        period: 'Apr 2015 — Jan 2017',
        title: 'IT Systems Technician',
        points: [
          'IT infrastructure, server connectivity, hardware diagnostics, and preventive maintenance for critical healthcare systems.',
        ],
      },
    ],
  },
  domain: {
    title: 'Fintech, KYC, and real systems',
    cardTitle: 'Fintech & KYC domain',
    body: 'A core part of my experience is in remittances, payments, and financial services platforms: identity validation, onboarding, provider integrations, and operating sensitive APIs.',
    items: [
      'International remittances',
      'KYC / onboarding',
      'Identity validation (SSN, ITIN, Passport)',
      'Blacklists and request states',
      'Cards and payment networks',
      'Open Banking',
      'Third-party integrations',
    ],
    projectsAria: 'Projects',
    educationTitle: 'Education',
    education: [
      'B.S. in Systems Engineering — Universidad del Tolima',
      'Associate Degree in Information Technology — Coreducación',
      'Languages: Spanish (native), English (B2)',
    ],
    projects: [
      'Lola',
      'Lola Remesas',
      'Lola KYC',
      'Viamericas',
      'LeapFinancial',
      'Payhub API',
      'Intermex',
      'Tabapay',
      'Cloud Cards',
      'FiservHub',
    ],
  },
  strengths: {
    title: 'How I help',
    items: [
      {
        title: 'Full cycle',
        text: 'Code, Docker, CI/CD, registry, infra, cloud, deploy, logs, and troubleshooting — end to end.',
      },
      {
        title: 'Practical focus',
        text: 'Knowledge shaped by real implementation and production issues, not theory alone.',
      },
      {
        title: 'Solid backend',
        text: 'APIs and services with Node.js, NestJS, and TypeScript; clear contracts and maintainable systems.',
      },
      {
        title: 'DevOps / Cloud',
        text: 'Terraform, GitHub Actions, Doppler, Cloud Run, and Railway in day-to-day work.',
      },
      {
        title: 'Troubleshooting',
        text: 'Multi-layer diagnosis: IAM, secrets, images, networks, databases, and integrations.',
      },
      {
        title: 'Business + tech',
        text: 'Fintech, KYC, and remittances context, plus leadership and project management experience.',
      },
    ],
  },
  contact: {
    title: 'If you want to chat, write me',
    body: 'Open to Backend / DevOps / Cloud roles, and to projects that need someone who can design, implement, and operate without dropping any of the three.',
  },
  footer: {
    email: 'Email',
  },
  shared: {
    name: 'Jorge Trujillo',
    location: 'Bogotá, Colombia',
    email: 'jorgeluistrujilllo@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jorge-trujillo-b2a18a38/',
    github: 'https://github.com/MatiusRock1',
  },
}
