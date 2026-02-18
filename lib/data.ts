/**
 * Resume and portfolio content data
 */

import type { Accent, Project, Experience, SkillGroup } from './types';

export const ACCENTS: Accent[] = [
  { id: 'blue', label: 'Blue', color: '#3b82f6' },
  { id: 'amber', label: 'Amber', color: '#f59e0b' },
  { id: 'green', label: 'Green', color: '#22c55e' },
  { id: 'rose', label: 'Rose', color: '#f43f5e' },
  { id: 'violet', label: 'Violet', color: '#8b5cf6' },
  { id: 'zinc', label: 'Zinc', color: '#71717a' },
];

export const PROJECTS: Project[] = [
  {
    id: 'prompt-observatory',
    label: 'Developer Tool',
    title: 'Prompt Observatory',
    description:
      'Test, compare, and version AI prompts with real-time latency metrics, token counting, and side-by-side run comparison. Built for teams iterating on LLM-powered workflows.',
    tech: ['Claude API', 'Next.js', 'TypeScript'],
    href: 'https://prompt-observatory.vercel.app',
  },
  {
    id: 'connex',
    label: 'Enterprise Integration',
    title: 'Connex',
    description:
      'Integration control plane for enterprise HR and learning systems. Semantic field matching, human-in-the-loop approval queues, and live sync logs across UKG, Docebo, LinkedIn Learning, and Axonify.',
    tech: ['React', 'Next.js', 'AI Matching'],
    href: 'https://connex-dashboard.vercel.app',
  },
  {
    id: 'curriculum-builder',
    label: 'L&D Tool',
    title: 'Curriculum Builder',
    description:
      'AI-assisted instructional design. Enter a topic, audience, and duration — get a structured curriculum with learning objectives, activities, and assessments ready for Docebo or Workday Learning.',
    tech: ['Claude API', 'Next.js', 'SCORM-aware'],
    href: 'https://curriculum-builder.vercel.app',
  },
  {
    id: 'self-healing-docs',
    label: 'Documentation System',
    title: 'Self-Healing Docs',
    description:
      'AI-assisted drift detection for technical documentation. Paste two API specs — the agent surfaces breaking changes, behavioral shifts, and doc update recommendations with confidence scoring.',
    tech: ['Claude API', 'Next.js', 'MDX'],
    href: 'https://garthpuckerin-vercel.vercel.app',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'L&D Specialist / Interim LMS Admin',
    company: 'Citadel Credit Union',
    period: 'Aug – Nov 2025',
    bullets: [
      'Maintained Docebo platform continuity during team transition',
      'Scoped integration consolidation across UKG, Axonify, LinkedIn Learning, and Docebo',
    ],
  },
  {
    role: 'Learning Management & Integration Consultant',
    company: 'Federal Home Loan Bank of Chicago',
    period: 'Aug – Oct 2025',
    bullets: [
      'Directed integration between Docebo, Udemy, Outlook, Teams, SSO, and SharePoint',
      'Authored UAT scripts and executed content validation across sandbox and production',
      'Configured authentication and permissions for pilot cohorts with HRIS and IT',
    ],
  },
  {
    role: 'Business Systems Analyst – LMS',
    company: 'Entrust Corporation',
    period: 'Jun 2022 – Mar 2025',
    bullets: [
      'Managed global Docebo LMS for 10,000+ users across internal, partner, and customer orgs',
      'Integrated Workday, Salesforce, QuickSight, and LinkedIn Learning to automate data flows',
      'Led Tier I/II incident triage with vendors and security teams',
      'Built performance dashboards, test plans, and compliance-ready audit documentation',
    ],
  },
  {
    role: 'LMS Administrator',
    company: 'Medidata Solutions',
    period: 'Nov 2020 – Jun 2022',
    bullets: [
      'Deployed Docebo with Okta SSO integration and zero operational disruption',
      'Produced monthly enablement scorecards linking LMS adoption to Sales pipeline',
      'Diagnosed performance issues using browser tooling and API testing',
    ],
  },
  {
    role: 'Learning Experience Platform Manager',
    company: 'Success Academy Charter Schools',
    period: 'Feb 2019 – Nov 2019',
    bullets: [
      'Introduced and implemented xAPI-compliant LXP tools for data tracking and analytics',
      'Integrated Whova and supporting event applications for large-scale programs',
      'Automated cohort assignments, notifications, and reporting through custom API orchestration',
    ],
  },
  {
    role: 'LMS Associate',
    company: 'Boehringer Ingelheim Pharmaceuticals',
    period: 'Oct 2016 – Jul 2018',
    bullets: [
      'Administered GxP-compliant training programs and resolved SCORM content issues',
      'Configured compliance-driven learning paths, SCORM validation, and global launch schedules',
      'Coordinated with QA and legal partners to maintain audit-ready documentation',
    ],
  },
  {
    role: 'Project Coordinator – Epic Go-Live',
    company: 'Montefiore Hospital',
    period: 'Oct 2015 – Jul 2016',
    bullets: [
      'Coordinated training for 25,000+ users across 7 locations with 120+ instructors',
      'Built Access-based scheduling system and analytics dashboards for trainer logistics',
    ],
  },
  {
    role: 'Regulatory Compliance Training Analyst',
    company: 'American Express',
    period: 'Feb 2012 – Oct 2015',
    bullets: [
      'Managed enterprise compliance training programs and regulatory alignment',
      'Migrated workflows to SharePoint and SumTotal with improved reporting and traceability',
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    group: 'Platforms',
    items: ['Docebo', 'Workday Learning', 'SuccessFactors', 'SumTotal', 'Axonify'],
  },
  {
    group: 'Integration',
    items: ['Workday', 'Salesforce', 'UKG Pro', 'LinkedIn Learning', 'Okta SSO', 'REST APIs'],
  },
  {
    group: 'Development',
    items: ['TypeScript', 'React', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    group: 'Standards',
    items: ['SCORM 2004', 'xAPI / Tin Can', 'GxP', 'WCAG 2.1'],
  },
];
