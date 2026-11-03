import type { ArchitectureTopic } from '../types/portfolio';

export const architectureTopics: ArchitectureTopic[] = [
  {
    id: 'clean-architecture',
    romanNumeral: 'I',
    title: 'Clean Architecture & Layered Systems',
    tagline: 'Strict Separation of Concerns across Presentation, BLL, and DAL',
    summary:
      'Enterprise applications demand decoupled layers where business rules remain completely agnostic of UI frameworks, ORM quirks, and database vendors. Utilizing strict Dependency Inversion, each layer is isolated behind contracts and interfaces.',
    principles: [
      {
        title: 'Presentation Layer (API / Controllers / UI)',
        description:
          'Handles HTTP transport concerns, routing, rate-limiting, and request/response serialization. Consumes service contracts without knowledge of underlying database schemas or SQL queries.'
      },
      {
        title: 'Business Logic Layer (BLL / Core Domain)',
        description:
          'Encapsulates business rules, domain invariants, workflow coordination, and transaction orchestration. Validates incoming DTOs and handles entity state transitions independent of database technology.'
      },
      {
        title: 'Data Access Layer (DAL / Persistence)',
        description:
          'Manages relational persistence via Entity Framework Core and SQL Server. Implements repository interfaces, query optimizations, eager/lazy loading configurations, and database migrations.'
      },
      {
        title: 'Dependency Inversion & Testability',
        description:
          'High-level modules never depend on low-level modules; both depend on abstractions. This enables unit testing of critical business logic using mock repositories without spinning up live databases.'
      }
    ],
    specifications: [
      { label: 'Pattern', value: 'N-Tier & Clean Architecture (API, BLL, DAL)' },
      { label: 'IoC Container', value: 'Microsoft.Extensions.DependencyInjection' },
      { label: 'Data Mapping', value: 'Explicit DTO Projections & AutoMapper Profiles' },
      { label: 'ORM Framework', value: 'Entity Framework Core 8 / 9 with Linq' }
    ]
  },
  {
    id: 'secure-apis',
    romanNumeral: 'II',
    title: 'Secure APIs & Enterprise Defense',
    tagline: 'Cryptographic Auth, Granular RBAC, Input Sanitization & Auditability',
    summary:
      'Security is not an afterthought or an add-on; it is engineered into every HTTP endpoint, data contract, and database query. From cryptographically signed JWT tokens with claims-based access policies to automated DTO validation, every layer is guarded.',
    principles: [
      {
        title: 'JWT Bearer Authentication & Token Rotation',
        description:
          'Stateless token-based authentication verified against asymmetric signing keys, featuring short-lived access tokens, secure HTTP-only refresh tokens, and revocation blacklists.'
      },
      {
        title: 'Granular Role-Based Access Control (RBAC)',
        description:
          'Multi-tier role assignment (e.g., Admin, Doctor, Receptionist, Customer) backed by fine-grained permission claims attached directly to the user principal.'
      },
      {
        title: 'Strict Input Validation & Model Sanitization',
        description:
          'Dual-layer defense combining client-side Zod schemas with server-side FluentValidation / DataAnnotations. Disallows unknown JSON properties and neutralizes XSS and SQL injection risks.'
      },
      {
        title: 'Structured Audit Logging & RFC 7807 Errors',
        description:
          'Tamper-evident audit logging recording timestamps, authenticated actor IDs, and IP origins for critical state mutations, paired with standardized RFC 7807 Problem Details responses.'
      }
    ],
    specifications: [
      { label: 'Authentication', value: 'JWT Bearer Tokens (HMAC-SHA256 / RSA)' },
      { label: 'Authorization', value: 'Claims-Based Policies & ASP.NET Core RBAC' },
      { label: 'Validation Engine', value: 'FluentValidation + Zod Schema Guards' },
      { label: 'Error Standard', value: 'RFC 7807 Problem Details Specification' }
    ]
  },
  {
    id: 'production-reliability',
    romanNumeral: 'III',
    title: 'Production Reliability & Delivery',
    tagline: 'Zero-Downtime Deployments, Resilient Data Layers & Core Web Vitals',
    summary:
      'Building robust code is half the equation; shipping it safely to production without downtime or performance degradation completes it. Incorporating automated health checks, connection resilience, and sub-second asset delivery pipelines.',
    principles: [
      {
        title: 'Automated Safe Deployment Workflows',
        description:
          'Orchestrated PowerShell deployment scripts (`safe_deploy.ps1`) executing pre-flight compilation checks, automated migration dry-runs, backup snapshots, and zero-downtime hot-swapping.'
      },
      {
        title: 'Resilient Cloud Database Connection Pooling',
        description:
          'Configured transient error handling and exponential backoff retry policies in Entity Framework Core to seamlessly weather intermittent cloud network blips on remote MSSQL hosts.'
      },
      {
        title: '100/100 Core Web Vitals Optimization',
        description:
          'Zero cumulative layout shift (CLS = 0), preloaded modern font subsets, critical path CSS extraction, and optimized image formats delivering instant First Contentful Paint (FCP).'
      },
      {
        title: 'Search Indexing & Structured Graph Data',
        description:
          'Automated XML sitemaps, robots crawler governance, OpenGraph cards, and schema.org JSON-LD graph specifications providing maximum organic search visibility.'
      }
    ],
    specifications: [
      { label: 'Deployment Strategy', value: 'Automated Safe Scripting & Blue/Green Staging' },
      { label: 'Database Resilience', value: 'EF Core EnableRetryOnFailure (5 Retries, 30s Max)' },
      { label: 'Lighthouse Target', value: '100 / 100 / 100 / 100 Across All Categories' },
      { label: 'Structured Data', value: 'Schema.org @graph (Person & LegalService)' }
    ]
  }
];
