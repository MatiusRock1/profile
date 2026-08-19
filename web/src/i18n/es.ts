import type { Content } from './types'

export const es: Content = {
  meta: {
    title: 'Jorge Trujillo',
    description:
      'Jorge Trujillo — ingeniero backend y DevOps. APIs, cloud y sistemas fintech en producción.',
  },
  nav: {
    about: 'Sobre mí',
    stack: 'Stack',
    experience: 'Experiencia',
    contact: 'Contacto',
    writeMe: 'Escribirme',
    sectionsAria: 'Secciones',
    languageAria: 'Idioma',
  },
  hero: {
    hello: 'Hola, soy',
    role: 'Backend · DevOps · AI / Fintech',
    intro:
      'Me gusta construir servicios que llegan a producción y se pueden operar con calma: APIs, integraciones, CI/CD y cloud. Últimamente trabajo mucho en fintech, pagos, KYC y agentes de IA que ya están en uso real.',
    talk: 'Hablemos',
    years: '9+ años de experiencia',
    remote: 'LeapFinancial · remoto',
    thesis:
      'No me quedo en el código: lo llevo hasta producción, lo observo y lo arreglo cuando falla.',
  },
  about: {
    title: 'Un poco sobre mí',
    p1: 'Ingeniero de software orientado a Backend y DevOps, con más de 9 años de experiencia. Combino desarrollo de APIs y microservicios con automatización de infraestructura, CI/CD y operación en cloud. Hoy trabajo como Senior Backend Developer & AI Solutions Engineer en LeapFinancial, diseñando pipelines de pagos, onboarding de tarjetas e agentes de IA en producción.',
    p2: 'Antes de enfocarme de lleno en backend y cloud, pasé por QA, project management y technical account management. Esa mezcla me ayuda a hablar con negocio, entender el problema completo y no quedarme solo en la capa de código.',
    note: 'Donde mejor encajo es en roles híbridos: backend con responsabilidad real sobre despliegue, operación e integraciones.',
    focus: [
      'Backend Development',
      'DevOps & CI/CD',
      'Cloud Engineering (GCP)',
      'Infrastructure as Code',
      'Microservicios & APIs REST',
      'Observabilidad',
      'Integraciones fintech',
      'KYC & onboarding',
      'Agentes de IA en producción',
    ],
  },
  stack: {
    title: 'Con qué trabajo',
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
        name: 'Observabilidad',
        items: ['Pino / nestjs-pino', 'Loki', 'Logging estructurado', 'Troubleshooting'],
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
    title: 'Experiencia',
    jobs: [
      {
        company: 'LeapFinancial',
        place: 'Miami, FL (Remote)',
        period: 'May 2023 — Presente',
        title: 'Senior Backend Developer & AI Solutions Engineer',
        points: [
          'Arquitectura de pipelines de onboarding y validación de tarjetas integrando VGS Proxy, Visa, Mastercard y Cross River Bank (AVS, ANI, capability checks).',
          'Diseño y despliegue de 6 agentes de IA en producción (remesas e Open Banking) con OpenAI, Gemini y OpenRouter, tool-calling multi-paso e integraciones API.',
          'Microservicios Node.js/Python con Redis, secretos con Doppler, CI/CD con GitHub Actions hacia Google Cloud Run y Railway.',
        ],
      },
      {
        company: 'SunDevs',
        place: 'Bogotá, Colombia',
        period: 'Feb 2017 — May 2023',
        title: 'Backend Developer · IT PM · TAM · QA',
        points: [
          'Backend: APIs REST seguras, conectores de pago y microservicios en Node.js y Python.',
          'Solutions Architect / Tech Lead para Cinemark LATAM en 6 países: unificación de pricing y reglas multi-tenant en apps, web y kioskos sobre el motor Vista.',
          'Project Manager de equipos de hasta 7 personas: roadmap, stakeholders, sprints y entrega.',
          'QA Engineer: planes de prueba manuales y automatizados para plataformas enterprise.',
        ],
      },
      {
        company: 'Clínica Sharon y UCI Tolima',
        place: 'Ibagué, Colombia',
        period: 'Abr 2015 — Ene 2017',
        title: 'IT Systems Technician',
        points: [
          'Infraestructura IT, conectividad de servidores, diagnóstico de hardware y mantenimiento preventivo en sistemas críticos de salud.',
        ],
      },
    ],
  },
  domain: {
    title: 'Fintech, KYC y sistemas reales',
    cardTitle: 'Dominio fintech & KYC',
    body: 'Parte central de mi experiencia está en plataformas de remesas, pagos y servicios financieros: validación de identidad, onboarding, integraciones con proveedores y operación de APIs sensibles.',
    items: [
      'Remesas internacionales',
      'KYC / onboarding',
      'Validación de identidad (SSN, ITIN, Passport)',
      'Blacklists y estados de solicitud',
      'Tarjetas y redes de pago',
      'Open Banking',
      'Integraciones con terceros',
    ],
    projectsAria: 'Proyectos',
    educationTitle: 'Formación',
    education: [
      'Ingeniería de Sistemas — Universidad del Tolima',
      'Tecnología en Informática — Coreducación',
      'Idiomas: Español (nativo), Inglés (B2)',
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
    title: 'Cómo aporto',
    items: [
      {
        title: 'Ciclo completo',
        text: 'Código, Docker, CI/CD, registry, infra, cloud, deploy, logs y troubleshooting — de punta a punta.',
      },
      {
        title: 'Orientación práctica',
        text: 'Conocimiento forjado en implementación real y en problemas de producción, no solo en teoría.',
      },
      {
        title: 'Backend sólido',
        text: 'APIs y servicios con Node.js, NestJS y TypeScript; contratos claros y sistemas mantenibles.',
      },
      {
        title: 'DevOps / Cloud',
        text: 'Terraform, GitHub Actions, Doppler, Cloud Run y Railway en el día a día.',
      },
      {
        title: 'Troubleshooting',
        text: 'Diagnóstico multi-capa: IAM, secretos, imágenes, redes, bases de datos e integraciones.',
      },
      {
        title: 'Negocio + técnica',
        text: 'Contexto de fintech, KYC y remesas, más experiencia de liderazgo y gestión de proyectos.',
      },
    ],
  },
  contact: {
    title: 'Si te late conversar, escríbeme',
    body: 'Estoy abierto a roles Backend / DevOps / Cloud, y a proyectos donde haga falta alguien que pueda diseñar, implementar y operar sin soltar ninguna de las tres.',
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
