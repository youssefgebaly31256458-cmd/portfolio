import type { SkillCategory } from '../types/portfolio';

export const skillsData: SkillCategory[] = [
  {
    category: 'Backend & Clean Architecture',
    description: 'Modern RESTful Web APIs, relational schema design, clean architectural patterns, and defensive programming.',
    skills: [
      {
        name: 'ASP.NET Core Web API',
        proficiency: 'Advanced / Core',
        description: 'RESTful API controllers, middleware pipelines, RFC 7807 error formatting, and dependency injection.'
      },
      {
        name: 'C# (.NET 8 & 9)',
        proficiency: 'Advanced / Core',
        description: 'Strongly typed asynchronous programming, LINQ queries, pattern matching, records, and memory efficiency.'
      },
      {
        name: 'Entity Framework Core',
        proficiency: 'Advanced / Core',
        description: 'Code-First migrations, fluent API modeling, query optimization, AsNoTracking caching, and resilient execution.'
      },
      {
        name: 'Microsoft SQL Server',
        proficiency: 'Advanced / Core',
        description: 'Normalized 3NF relational schemas, indexing strategies, foreign key constraints, and stored procedures.'
      },
      {
        name: 'Clean Architecture & N-Tier',
        proficiency: 'Advanced / Core',
        description: 'Strict separation into Presentation, Business Logic Layer (BLL), and Data Access Layer (DAL).'
      },
      {
        name: 'RBAC & JWT Security',
        proficiency: 'Advanced / Core',
        description: 'Role-based access control, claims-based policies, token issuance, and authorization middleware.'
      }
    ]
  },
  {
    category: 'Frontend Engineering & Performance',
    description: 'Pixel-precise, accessible, and high-performance user interfaces with smooth physics and micro-interactions.',
    skills: [
      {
        name: 'React 19 & TypeScript',
        proficiency: 'Advanced / Core',
        description: 'Component composition, custom hooks, typed state modeling, and strict compiler enforcement.'
      },
      {
        name: 'Next.js (App Router)',
        proficiency: 'Advanced / Core',
        description: 'Server components, static site generation, metadata route handlers, and Core Web Vitals optimization.'
      },
      {
        name: 'Tailwind CSS',
        proficiency: 'Advanced / Core',
        description: 'Modern design tokens, responsive breakpoints, glassmorphism, and dark-mode color palettes.'
      },
      {
        name: 'Framer Motion',
        proficiency: 'Advanced / Core',
        description: 'Fluid layout transitions, staggered entrance physics, gesture interactions, and scroll triggers.'
      },
      {
        name: 'Zod Validation',
        proficiency: 'Advanced / Core',
        description: 'Type-safe client-side form verification mirroring backend C# DTO contracts.'
      },
      {
        name: 'Bilingual RTL Engineering',
        proficiency: 'Advanced / Core',
        description: 'Native Arabic RTL interface architecture, responsive typography, and layout parity.'
      }
    ]
  },
  {
    category: 'Cloud, Reliability & Tooling',
    description: 'Production infrastructure, automated safe deployment scripts, structured data, and search engine excellence.',
    skills: [
      {
        name: 'MonsterASP.NET & Cloud MSSQL',
        proficiency: 'Production Proven',
        description: 'Remote database administration, connection string resilience, and IIS runtime configuration.'
      },
      {
        name: 'Vercel Production Hosting',
        proficiency: 'Production Proven',
        description: 'Edge network deployment, zero-latency asset distribution, and continuous branch previews.'
      },
      {
        name: 'PowerShell Safe Deploy (safe_deploy.ps1)',
        proficiency: 'Production Proven',
        description: 'Automated pre-flight build checks, database migration automation, and zero-downtime bundle sync.'
      },
      {
        name: 'OpenAPI 3.0 & Swagger',
        proficiency: 'Production Proven',
        description: 'Comprehensive API documentation, request/response schema specifications, and endpoint contracts.'
      },
      {
        name: 'JSON-LD Structured Data',
        proficiency: 'Production Proven',
        description: 'Schema.org compliant @graph entities (LegalService, Person) for rich search engine indexing.'
      },
      {
        name: 'Core Web Vitals Engineering',
        proficiency: 'Production Proven',
        description: 'Achieving 100/100 Lighthouse metrics across performance, accessibility, SEO, and best practices.'
      }
    ]
  }
];
