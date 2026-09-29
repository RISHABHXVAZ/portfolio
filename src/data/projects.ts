import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'profmojo',
    title: 'ProfMojo',
    date: 'Dec 2025 – Jan 2026',
    tagline: 'Role-Based Academic Operations & Facility Automation Platform',
    description:
      'A role-based academic operations platform for class management, attendance, and facility request automation.',
    technologies: [
      'Spring Boot',
      'Spring Security',
      'React.js',
      'PostgreSQL',
      'JWT',
      'Docker',
    ],
    highlights: [
      'Stateless JWT authentication and endpoint-level RBAC across 4 user roles (Student, Professor, Admin, Staff) using Spring Security.',
      'Class lifecycle system with code-based enrollment and attendance tracking, backed by dedicated summary DTOs for per-class and per-student history.',
      'SLA-driven amenity request pipeline with FIFO department-scoped staff auto-assignment and a scheduled background job polling every 30s to detect and flag SLA breaches.',
      'Confirmation-code verification step for request delivery and containerized the full stack (backend, frontend, PostgreSQL) with Docker Compose.',
    ],
    githubUrl: 'https://github.com/RISHABHXVAZ/ProfMojo',
    demoUrl: 'https://drive.google.com/drive/folders/11lZ-dvimKZ13rbO4XM5W9msQhwbTkVYn?usp=sharing',
    demoType: 'watch', // Explicitly "Watch Demo", not "Live Demo"
  },
  {
    id: 'wealthify',
    title: 'Wealthify',
    date: 'Mar 2026 – Apr 2026',
    tagline: 'AI-Powered Personal Finance & Investment Advisory Platform',
    description:
      'An AI-powered personal finance and expense tracking platform with intelligent categorization and investment advisory.',
    technologies: [
      'Spring Boot',
      'Spring Security',
      'React.js',
      'PostgreSQL',
      'Groq LLM API',
      'JWT',
    ],
    highlights: [
      'Groq LLM integration with rule-constrained prompts to categorize expenses and flag wasteful spending based on income, budget, and spending context.',
      'Analytics engine computing daily/monthly spending aggregates and wasteful-spend percentages via Java streams, feeding results into LLM-generated summaries and tips.',
      'LLM-prompted investment suggestions (ETFs/MFs) parameterized on user surplus, income, and spending pattern, with retry-with-backoff and response caching to handle API rate limits.',
      'Secured REST APIs with stateless JWT authentication via a custom Spring Security filter chain and centralized structured error handling.',
    ],
    githubUrl: 'https://github.com/RISHABHXVAZ/Wealthify',
    demoUrl: 'https://wealthify-frontend.vercel.app/',
    demoType: 'live', // Explicitly "Live Demo"
  },
];
