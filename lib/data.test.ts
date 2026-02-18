import { describe, it, expect } from 'vitest';
import { ACCENTS, PROJECTS, EXPERIENCE, SKILLS } from './data';

describe('data', () => {
  describe('ACCENTS', () => {
    it('has 6 accent options', () => {
      expect(ACCENTS).toHaveLength(6);
    });

    it('each accent has id, label, and color', () => {
      ACCENTS.forEach((accent) => {
        expect(accent).toHaveProperty('id');
        expect(accent).toHaveProperty('label');
        expect(accent).toHaveProperty('color');
        expect(accent.color).toMatch(/^#[0-9a-fA-F]{6}$/);
      });
    });
  });

  describe('PROJECTS', () => {
    it('has 4 projects', () => {
      expect(PROJECTS).toHaveLength(4);
    });

    it('each project has required fields', () => {
      PROJECTS.forEach((project) => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('tech');
        expect(project).toHaveProperty('href');
        expect(project.href).toMatch(/^https?:\/\//);
      });
    });
  });

  describe('EXPERIENCE', () => {
    it('has experience entries', () => {
      expect(EXPERIENCE.length).toBeGreaterThan(5);
    });

    it('each experience has role, company, period, bullets', () => {
      EXPERIENCE.forEach((exp) => {
        expect(exp).toHaveProperty('role');
        expect(exp).toHaveProperty('company');
        expect(exp).toHaveProperty('period');
        expect(exp).toHaveProperty('bullets');
        expect(Array.isArray(exp.bullets)).toBe(true);
      });
    });
  });

  describe('SKILLS', () => {
    it('has skill groups', () => {
      expect(SKILLS.length).toBeGreaterThan(0);
    });

    it('each group has group name and items array', () => {
      SKILLS.forEach((group) => {
        expect(group).toHaveProperty('group');
        expect(group).toHaveProperty('items');
        expect(Array.isArray(group.items)).toBe(true);
      });
    });
  });
});
