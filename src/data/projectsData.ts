import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'shifaa-clinic',
    title: 'Shifaa — Clinic Management System (شفاء)',
    subtitle: 'Full-Stack Healthcare System & Clinic Operations Engine',
    categoryBadge: 'Enterprise SaaS',
    valueProposition:
      'An enterprise-grade medical clinic management platform engineered to orchestrate clinical workflows, physician consultations, and administrative operations with zero latency. It eliminates manual paper charts through unified electronic encounters and prevents appointment scheduling collisions across multi-physician practices.',
    keyCapabilities: [
      'Decoupled Clean Architecture (API, BLL, DAL) enforcing strict layer separation and domain isolation',
      'Fine-grained Role-Based Access Control (RBAC) via claims-based JWT authentication for Admins, Doctors, and Staff',
      'Normalized 3NF Microsoft SQL Server relational schema with transactional integrity and isolated audit trails',
      'Real-time multi-doctor appointment lifecycle management with automated electronic prescription dispatch'
    ],
    techStack: [
      'ASP.NET Core',
      'C#',
      'SQL Server',
      'EF Core',
      'React 19',
      'TypeScript'
    ],
    githubUrl: 'https://github.com/youssefgebaly31256458-cmd/shifaa-clinic-system',
    architectureDetails: {
      pattern: 'Clean Architecture with Repository & Service Pattern (Presentation, BLL, DAL)',
      database: 'Normalized 3NF relational schema in Microsoft SQL Server with strict foreign key constraints, indexed doctor lookup keys, and isolated audit trails.',
      security: 'Fine-grained Role-Based Access Control (RBAC) enforced via JWT bearer tokens and claims policies (Admin, Doctor, Receptionist).',
      highlights: [
        'OpenAPI 3.0 contract documentation with automated schema generation and RFC 7807 error modeling.',
        'Atomic database transactions guaranteeing multi-entity integrity for clinical encounters and prescriptions.',
        'Deterministic appointment state machine preventing illegal mutations across departments.',
        'Client-side state synchronization using optimized TypeScript type contracts in React 19.'
      ]
    }
  },
  {
    id: 'greenora-platform',
    title: 'Greenora — Commercial Platform & Operations (جرينورا)',
    subtitle: 'N-Tier Architecture, Artificial Turf Catalog & Lead Operations Engine',
    categoryBadge: 'Commercial Platform',
    valueProposition:
      'A high-performance bilingual commercial web platform and operations engine powering synthetic turf contracting across regional markets. It automates customer lead qualification and on-site inspection intake while delivering zero-latency browsing through native Arabic RTL layouts.',
    keyCapabilities: [
      'Decoupled N-Tier enterprise architecture: Greenora.API -> Greenora.BLL -> Greenora.DAL',
      'Cloud-hosted Microsoft SQL Server (MonsterASP.NET) with resilient connection pooling',
      'Type-safe input verification pairing client-side Zod validation with server-side C# DTOs',
      'Automated deployment routine with database migration safety checks and backup rotation'
    ],
    techStack: [
      'ASP.NET Core',
      'C#',
      'MSSQL Cloud',
      'React 19',
      'TypeScript',
      'Tailwind CSS'
    ],
    liveUrl: 'https://scoregrassbns.com',
    liveLabel: 'Live Preview',
    githubUrl: 'https://github.com/youssefgebaly31256458-cmd/greenora-platform',
    architectureDetails: {
      pattern: 'N-Tier Layered Architecture strictly separating HTTP presentation, business orchestration, and EF Core data access.',
      database: 'Microsoft SQL Server instance deployed to MonsterASP.NET cloud hosting with normalized relations, auto-reconnect pooling, and EF Core migration tracking.',
      security: 'Server-side model validation paired with client-side Zod schema verification, CSRF token mitigation, and hardened environment secret management.',
      highlights: [
        'Dynamic memory-cached CMS configuration engine with resilient default fallbacks during updates.',
        'Automated inspection booking intake pipeline capturing site dimensions and regional metrics.',
        'Production safe deployment automation scripts verifying builds and database health before publishing.',
        'RTL-first layout engineered for Arabic typography without layout shifts or horizontal clipping.'
      ]
    }
  },
  {
    id: 'dr-gebaly-portfolio',
    title: 'Dr. Gebaly Legal & Academic Portfolio',
    subtitle: 'Legal Portfolio, Academic Jurisprudence & 100/100 Core Web Vitals',
    categoryBadge: 'Production Showcase',
    valueProposition:
      'An executive digital presence engineered for an esteemed High Court litigator and legal scholar to showcase landmark jurisprudence, commercial tax advisory, and judicial credentials. Built with static site generation for instantaneous loads and Google Rich Results search authority.',
    keyCapabilities: [
      '100/100 Google Lighthouse benchmark across Performance, Accessibility, Best Practices, and SEO',
      'Static Site Generation (SSG) with Next.js App Router for sub-500ms Largest Contentful Paint',
      'Comprehensive Schema.org (JSON-LD) graph enhancing High Court litigation search indexing',
      'Strict Content Security Policy (CSP), automated XML sitemaps, and zero Cumulative Layout Shift'
    ],
    techStack: [
      'Next.js (App Router)',
      'TypeScript',
      'Tailwind CSS',
      'Vercel Hosting',
      'JSON-LD Schema'
    ],
    liveUrl: 'https://dr-gebaly-legal.vercel.app',
    liveLabel: 'Live Website',
    githubUrl: 'https://github.com/youssefgebaly31256458-cmd/dr-gebaly-portfolio',
    architectureDetails: {
      pattern: 'Next.js App Router with React Server Components (RSC) and build-time Static Site Generation (SSG).',
      database: 'Structured Content Modeling with typed schema definitions and build-time static generation for instantaneous response times.',
      security: 'Content Security Policy (CSP) headers, strict X-Frame-Options, DNS prefetching, and zero external runtime script vulnerabilities.',
      highlights: [
        '100/100 Core Web Vitals with zero Layout Shift (CLS = 0) and sub-500ms Largest Contentful Paint (LCP).',
        'Google Rich Results compliant JSON-LD graph architecture enhancing organic search authority.',
        'Dynamically rendered XML sitemap indexing legal dossiers, research papers, and courtroom precedents.',
        'Responsive typography tuned for high-density academic briefs across mobile and desktop.'
      ]
    }
  }
];
