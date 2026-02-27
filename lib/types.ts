/**
 * Type definitions for resume/portfolio content
 */

export type THEMES = 'light' | 'dark' | 'azure';

export interface Accent {
  id: string;
  label: string;
  color: string;
}

export interface ThemeColors {
  bg: string;
  surface: string;
  surfaceAlt: string;
  border: string;
  text: string;
  textMuted: string;
  textSubtle: string;
  textBody: string;
  textSecondary: string;
  headerBg: string;
  tagBg: string;
  tagColor: string;
  cardHoverBg: string;
  cardHoverText: string;
  cardHoverMuted: string;
  cardHoverTag: string;
  cardHoverTagText: string;
  footerBg: string;
  dashed: string;
  expHover: string;
  toggleBg: string;
  toggleColor: string;
}

export interface ProjectModal {
  overview: string;
  capabilities: string[];
  enterpriseValue: string;
  useCases: string[];
}

export interface Project {
  id: string;
  label: string;
  title: string;
  type: string;
  description: string;
  tech: string[];
  href: string;
  modal: ProjectModal;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  metrics?: string[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}
