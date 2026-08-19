# Jorge Trujillo — Perfil Profesional

## Resumen profesional

Desarrollador de software con experiencia en **Backend, DevOps, Cloud e integración de sistemas**, especialmente en entornos orientados a servicios financieros, remesas, KYC y plataformas digitales.

Experiencia trabajando con arquitecturas basadas en **microservicios, APIs REST, contenedores Docker y servicios cloud**, participando tanto en el desarrollo de aplicaciones como en la definición, automatización y operación de infraestructura.

Perfil principalmente orientado a **Backend / DevOps**, con fuerte experiencia práctica en **Node.js, NestJS, Python, Docker, GitHub Actions, GCP, Railway, Terraform, Cloud Run, Artifact Registry, Secret Manager y Doppler**.

También cuenta con experiencia trabajando con equipos internacionales y proyectos donde participan múltiples proveedores e integraciones externas.

---

## Áreas principales

- Backend Development
- DevOps
- Cloud Engineering
- CI/CD
- Infrastructure as Code
- Microservicios
- APIs REST
- Docker y containerización
- Automatización de despliegues
- Integración de servicios externos
- Observabilidad y logging
- Gestión de secretos y configuración
- Infraestructura en Google Cloud
- Arquitectura y mantenimiento de plataformas
- Integraciones para servicios financieros
- Sistemas de KYC y onboarding

---

## Tecnologías

### Backend

- Node.js
- NestJS
- TypeScript
- Python
- JavaScript
- Mongoose
- MongoDB
- Redis
- REST APIs
- Swagger / OpenAPI

### DevOps / CI/CD

- Docker
- Docker Buildx
- GitHub Actions
- GitHub Packages
- GitHub Container Registry
- Google Artifact Registry
- Terraform
- Doppler
- Railway
- Cloud Run
- Google Cloud Platform
- Nginx
- Linux

### Cloud / GCP

Experiencia práctica con:

- Cloud Run
- Artifact Registry
- Secret Manager
- VPC
- VPC Connectors
- IAM
- Cloud infrastructure
- Containerized workloads
- Terraform para infraestructura
- Automatización de despliegues

### Observabilidad

- Logging estructurado
- Pino / nestjs-pino
- Loki
- Análisis de logs
- Troubleshooting de aplicaciones y servicios
- Diagnóstico de problemas en ambientes cloud

### Bases de datos y almacenamiento

- MongoDB
- Redis
- Google Cloud Storage

---

## Experiencia en arquitectura

Experiencia trabajando con arquitecturas donde los servicios son desplegados de forma independiente y se comunican mediante APIs e integraciones externas.

Ha trabajado con esquemas donde:

```text
Developer
   │
   ▼
GitHub
   │
   ▼
CI/CD
   │
   ├── Docker Build
   │
   ├── Container Registry
   │
   └── Deployment
          │
          ├── Railway
          │
          └── Google Cloud Run
```

También ha trabajado con infraestructura administrada mediante **Terraform**, separando infraestructura, aplicaciones, configuración y secretos.

---

## Gestión de configuración y secretos

Experiencia utilizando **Doppler** para centralizar y administrar variables de entorno y secretos.

Ha trabajado con:

- Diferentes ambientes (`dev`, `qa`, `prod`)
- Sincronización de variables
- Configuración por proyecto
- Workspaces
- Templates
- Integración con CI/CD
- Integración con Railway
- Gestión de secretos para aplicaciones desplegadas en cloud

Una de las áreas de interés ha sido establecer estructuras reutilizables para manejar configuración de múltiples proyectos y partners.

---

## CI/CD

Experiencia diseñando y manteniendo pipelines de despliegue automatizado.

Entre los escenarios trabajados:

- Build de imágenes Docker
- Push de imágenes a registries
- Versionamiento/tagging de imágenes
- Deploy hacia Cloud Run
- Deploy hacia Railway
- Deploy manual mediante `workflow_dispatch`
- Integración de GitHub Actions con Doppler
- Promoción de versiones entre ambientes
- Automatización de infraestructura mediante Terraform

También existe experiencia con estrategias donde una imagen previamente construida puede ser reutilizada y desplegada en diferentes ambientes sin reconstruir innecesariamente el artefacto.

---

## Experiencia con GCP

Experiencia práctica administrando workloads en Google Cloud, particularmente:

- Cloud Run
- Artifact Registry
- Secret Manager
- IAM
- VPC
- VPC Connectors
- Terraform
- Service Accounts
- Permisos para servicios
- Deployments
- Troubleshooting de infraestructura

Ha trabajado especialmente con aplicaciones containerizadas desplegadas en Cloud Run.

---

## Proyectos y dominio financiero

Parte importante de la experiencia profesional está relacionada con plataformas de **remesas, pagos y servicios financieros**.

Ha trabajado en proyectos y sistemas relacionados con:

- Remesas internacionales
- KYC
- Onboarding
- Validación de identidad
- Integraciones con proveedores financieros
- Procesamiento de transacciones
- APIs financieras
- Tarjetas
- Validaciones regulatorias
- Integraciones con terceros

Entre los proyectos y componentes con los que ha trabajado se encuentran:

- Lola
- Lola Remesas
- Lola KYC
- Viamericas
- LeapFinancial
- Payhub API
- Intermex
- Tabapay
- Cloud Cards
- FiservHub

---

## KYC y onboarding

Experiencia trabajando con flujos de KYC y onboarding, incluyendo lógica relacionada con:

- SSN
- ITIN
- Passport
- Validación de identidad
- Blacklists
- Estados de solicitudes
- Integraciones con proveedores externos
- Manejo de errores y estados de procesos

Ha trabajado con estados y flujos como:

- `Failed`
- `InProgress`
- `Requested`
- `WaitingBlackListsValidation`

También ha participado en el análisis de problemas relacionados con UX, validaciones, latencia e integraciones entre frontend, backend y proveedores externos.

---

## Integraciones

Experiencia integrando aplicaciones backend con diferentes servicios externos y proveedores.

Esto incluye:

- APIs REST
- Servicios financieros
- Servicios de KYC
- Servicios de pagos
- Servicios de almacenamiento
- Servicios de identidad
- Servicios cloud
- APIs de terceros

El trabajo ha requerido analizar documentación externa, adaptar contratos de API, manejar diferentes estados de respuesta y resolver problemas de integración.

---

## Troubleshooting

Uno de los puntos fuertes del perfil es la capacidad de investigar problemas que involucran diferentes capas de una plataforma.

Ejemplos de problemas abordados:

- Fallos de deployments
- Problemas de permisos IAM
- Problemas con Secret Manager
- Errores de Cloud Run
- Problemas de Docker
- Problemas de imágenes y registries
- Errores de MongoDB
- Problemas de permisos en Linux
- Problemas de CI/CD
- Errores de configuración
- Problemas de integración entre servicios
- Análisis de logs

El enfoque suele partir del diagnóstico del problema, identificación de la capa responsable y posterior implementación de una solución automatizable y mantenible.

---

## Experiencia con Linux y administración de sistemas

Experiencia práctica trabajando con Linux y servidores domésticos/profesionales.

Conocimientos y experiencia en:

- Ubuntu
- Docker
- Shell
- SSH
- File permissions
- Servicios Linux
- Networking básico
- Storage
- Containers
- Troubleshooting
- Administración de aplicaciones self-hosted

También existe experiencia administrando servicios como:

- Plex
- ownCloud
- Nextcloud
- CasaOS
- Threadfin
- EPG
- Ollama
- LocalAI

---

## AI / infraestructura para IA

Interés y experiencia práctica explorando infraestructura para inteligencia artificial local.

Ha trabajado o experimentado con:

- Ollama
- LocalAI
- Modelos locales
- Inferencia local
- GPU acceleration
- VRAM
- AMD Radeon
- NVIDIA
- Configuraciones multi-GPU
- Docker para workloads de IA

También ha evaluado configuraciones de hardware orientadas a disponer de múltiples GPUs para inferencia.

---

## Hardware e infraestructura personal

Experiencia práctica montando y administrando infraestructura tecnológica, incluyendo:

- PCs de escritorio
- GPUs AMD y NVIDIA
- NAS / almacenamiento
- Orange Pi
- Mac mini
- Linux
- Windows
- Dual boot
- Docker
- Redes domésticas
- Servidores self-hosted

Esto complementa el perfil de software con una buena capacidad para entender problemas desde el nivel de aplicación hasta infraestructura y hardware.

---

## Experiencia de liderazgo y gestión

Además del desarrollo técnico, cuenta con experiencia como **Project Manager**, incluyendo aproximadamente dos años trabajando con proyectos relacionados con Cinemark.

Esto aporta experiencia adicional en:

- Coordinación de proyectos
- Seguimiento de tareas
- Comunicación con equipos
- Priorización
- Coordinación entre áreas técnicas y no técnicas
- Seguimiento de entregables
- Gestión de requerimientos

La combinación de experiencia técnica y gestión permite comprender tanto las necesidades del desarrollo como las necesidades operativas y de negocio.

---

## Perfil profesional objetivo

El perfil encaja especialmente bien con posiciones como:

### Backend Developer

Especialmente:

- Node.js Developer
- NestJS Developer
- TypeScript Backend Developer
- Backend Engineer

### DevOps

Especialmente:

- DevOps Engineer
- Cloud DevOps Engineer
- DevOps Mid-level
- Platform Engineer

### Cloud

- Cloud Engineer
- GCP Engineer
- Cloud Infrastructure Engineer

### Perfil híbrido

Una de las posiciones donde mejor encaja el perfil es un rol híbrido:

> **Backend Engineer + DevOps / Cloud**

Este tipo de perfil permite aprovechar tanto la experiencia desarrollando aplicaciones como la experiencia desplegándolas, automatizando infraestructura y solucionando problemas de producción.

---

## Fortalezas

### 1. Visión completa del ciclo de una aplicación

No se limita al desarrollo del código.

Puede trabajar sobre:

```text
Código
  ↓
Docker
  ↓
CI/CD
  ↓
Registry
  ↓
Infraestructura
  ↓
Cloud
  ↓
Deployment
  ↓
Logs
  ↓
Troubleshooting
```

### 2. Orientación práctica

El conocimiento está fuertemente basado en implementación y resolución de problemas reales.

### 3. Backend

Fuerte orientación hacia desarrollo de APIs y servicios backend utilizando principalmente Node.js, NestJS y TypeScript.

### 4. DevOps / Cloud

Experiencia práctica con herramientas modernas de infraestructura y deployment.

### 5. Troubleshooting

Capacidad para investigar problemas complejos que involucran múltiples componentes.

### 6. Conocimiento del negocio financiero

La experiencia con remesas, KYC y pagos proporciona contexto de negocio adicional que no suele estar presente en perfiles puramente técnicos.

### 7. Capacidad híbrida

La combinación de desarrollo, infraestructura, DevOps y gestión de proyectos permite actuar como puente entre equipos de desarrollo, infraestructura y negocio.

---

## Perfil resumido para CV

> **Backend / DevOps Engineer with hands-on experience in Node.js, NestJS, TypeScript, Python, Docker, CI/CD, Google Cloud Platform and Infrastructure as Code. Experienced in designing, developing and deploying microservices and APIs, automating cloud infrastructure with Terraform, and implementing CI/CD pipelines using GitHub Actions. Strong experience troubleshooting distributed systems, managing secrets and environments with Doppler, and deploying containerized workloads to Cloud Run and Railway. Domain experience includes financial services, international remittances, KYC, onboarding, payments and third-party integrations.**

---

## Perfil resumido en español

> **Ingeniero de software orientado a Backend y DevOps, con experiencia práctica en Node.js, NestJS, TypeScript, Python, Docker, CI/CD, Google Cloud e Infrastructure as Code. Experiencia desarrollando y desplegando microservicios y APIs, automatizando infraestructura mediante Terraform y construyendo pipelines de CI/CD con GitHub Actions. Fuerte capacidad de troubleshooting y experiencia administrando aplicaciones containerizadas, secretos y ambientes mediante Doppler, Cloud Run y Railway. Experiencia de dominio en servicios financieros, remesas internacionales, KYC, onboarding, pagos e integraciones con terceros.**

---

## LinkedIn / GitHub

- LinkedIn: https://www.linkedin.com/in/jorge-trujillo-b2a18a38/
- GitHub: https://github.com/MatiusRock1

---

## Palabras clave profesionales

```text
Backend Engineer
DevOps Engineer
Cloud Engineer
Software Engineer
Node.js
NestJS
TypeScript
Python
Docker
Kubernetes
CI/CD
GitHub Actions
Terraform
Google Cloud
GCP
Cloud Run
Artifact Registry
Secret Manager
Doppler
Railway
MongoDB
Redis
REST API
Microservices
KYC
Fintech
Payments
Remittances
Cloud Infrastructure
Infrastructure as Code
Observability
Troubleshooting
Linux
```

---

## Posicionamiento profesional

El perfil puede posicionarse como:

> **Backend / DevOps Engineer especializado en construir, desplegar y operar servicios backend y plataformas cloud, con experiencia en fintech, KYC y remesas.**

La principal diferenciación frente a un Backend Developer tradicional es la capacidad de trabajar también sobre **infraestructura, CI/CD, cloud y operación**, mientras que frente a un DevOps tradicional existe una mayor profundidad en **desarrollo backend y arquitectura de APIs**.