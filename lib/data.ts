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
    id: 'curriculum-builder',
    label: 'L&D Tool · AI-First',
    title: 'Curriculum Builder',
    type: 'AI-Assisted Instructional Design',
    description:
      'Enter a topic, audience, and duration — AI generates a structured curriculum with learning objectives, activities, and assessments, ready for any LMS including Intellum.',
    tech: ['Claude API', 'Next.js', 'SCORM-aware'],
    href: 'https://curriculum-builder.vercel.app',
    modal: {
      overview:
        'Applied implementation of the Janus content engine with MIMIR²-style content structuring. Enter a topic, audience, and duration — AI generates a structured curriculum with learning objectives, activities, and assessments, ready for any LMS including Intellum.',
      capabilities: [
        'Structured curriculum from a single brief — topic, audience, duration',
        'Audience-aware content generation (different outputs for learners vs. facilitators)',
        'Learning objectives, activities, and assessments in one pass',
        'SCORM-compatible output schema for direct LMS import',
        'Deployable to Intellum, Docebo, Workday Learning, and other platforms',
      ],
      enterpriseValue:
        'Reduces curriculum design time from days to hours. One L&D professional produces what previously required a full instructional design team. Directly addresses the AI-first content creation requirement.',
      useCases: [
        'New product feature → complete training kit within a business day',
        'Compliance course refresh triggered by policy changes',
        'Onboarding curriculum generation for new hire cohorts at scale',
      ],
    },
  },
  {
    id: 'connex',
    label: 'Enterprise Integration',
    title: 'Connex',
    type: 'Integration Control Plane',
    description:
      'Integration control plane for enterprise HR and learning systems. Semantic field matching, human-in-the-loop approval queues, and live sync logs across UKG, Docebo, LinkedIn Learning, and Axonify.',
    tech: ['React', 'Next.js', 'AI Matching'],
    href: 'https://connex-dashboard.vercel.app',
    modal: {
      overview:
        'Production implementation of the Aether SDK integration architecture. Integration control plane for enterprise HR and learning systems — semantic field matching, human-in-the-loop approval queues, and live sync logs across UKG, Docebo, LinkedIn Learning, and Axonify.',
      capabilities: [
        'Semantic field matching across mismatched system schemas',
        'Human-in-the-loop approval queues for high-stakes data changes',
        'Live sync status logs and error surfaces',
        'Support for UKG + Docebo + LinkedIn Learning + Axonify',
        'Drift detection with configurable alerting thresholds',
      ],
      enterpriseValue:
        'Eliminates manual data reconciliation between HR and learning systems. The same architecture is directly applicable to Intellum + HRIS/CRM integration at Walmart Connect.',
      useCases: [
        'Employee role change triggers automated learning path update',
        'Training completions sync automatically to HRIS compliance records',
        'New hire auto-enrolled in Intellum onboarding path on day one',
      ],
    },
  },
  {
    id: 'prompt-observatory',
    label: 'Developer Tool',
    title: 'Prompt Observatory',
    type: 'AI Workflow Testing & Governance',
    description:
      'Test, compare, and version AI prompts with real-time latency metrics, token counting, and side-by-side run comparison. Built for teams iterating on LLM-powered L&D workflows.',
    tech: ['Claude API', 'Next.js', 'TypeScript'],
    href: 'https://prompt-observatory.vercel.app',
    modal: {
      overview:
        'Experimentation and iteration environment for the AI workflows that power Janus. Test, compare, and version AI prompts with real-time latency metrics, token counting, and side-by-side run comparison — built for teams iterating on LLM-powered L&D workflows.',
      capabilities: [
        'Side-by-side prompt comparison with performance metrics',
        'Latency and token cost tracking per run',
        'Version history for prompt iterations with rollback',
        'Reproducible test runs with documented results',
        'Shareable run records for team review and approval workflows',
      ],
      enterpriseValue:
        'Enables responsible AI deployment: prompt behavior is testable, comparable, and auditable before it reaches learners. Supports enterprise AI governance — humans validate before production use.',
      useCases: [
        'Evaluating content generation prompts before LMS deployment',
        'A/B testing learner communication variants for completion rate impact',
        'Documenting AI-assisted design decisions for audit trail',
      ],
    },
  },
  {
    id: 'self-healing-docs',
    label: 'Documentation System',
    title: 'Self-Healing Docs',
    type: 'AI-Assisted Documentation Governance',
    description:
      'AI-assisted drift detection for technical documentation. Surfaces breaking changes, behavioral shifts, and doc update recommendations with confidence scoring.',
    tech: ['Claude API', 'Next.js', 'MDX'],
    href: 'https://garthpuckerin-vercel.vercel.app',
    modal: {
      overview:
        "Applied prototype of MIMIR²'s drift detection and propagation logic. Paste two API specs — the agent surfaces breaking changes, behavioral shifts, and doc update recommendations with confidence scoring. Proof-of-concept for AI-assisted training content governance.",
      capabilities: [
        'API spec comparison and drift analysis with confidence scoring',
        'Breaking change detection vs. behavioral shift classification',
        'Actionable update suggestions for doc maintainers',
        'Structured output suitable for downstream content generation triggers',
        'Human-review gate — no recommendations surface without approval',
      ],
      enterpriseValue:
        'Demonstrates the documentation governance principle this role requires: keeping training content accurate when the product changes. Directly applicable to Intellum content maintenance workflows.',
      useCases: [
        'Flagging outdated training materials after product release cycles',
        'Tracking documentation drift across quarterly platform updates',
        'Informing Intellum content refresh priorities with confidence scores',
      ],
    },
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
    metrics: [
      '100% platform uptime during transition',
      'Zero data loss during HRIS sync migration',
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
    metrics: [
      '3,000+ users migrated across SSO domains',
      '50% reduction in manual enrolment tickets',
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
    metrics: [
      '$200k+ annual savings via integration automation',
      '99.9% compliance record accuracy',
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
