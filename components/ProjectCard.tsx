'use client';

import { useState } from 'react';
import type { Project } from '@/lib/types';
import { THEMES } from '@/lib/themes';

interface ProjectCardProps {
  project: Project;
  index: number;
  theme: 'light' | 'dark';
  accent: string;
  onOpen: (project: Project) => void;
}

/**
 * Project card component with hover effects and modal trigger
 */
export function ProjectCard({ project, index, theme, accent, onOpen }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const t = THEMES[theme];

  const handleActivate = () => onOpen(project);

  return (
    <div
      onClick={handleActivate}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleActivate();
        }
      }}
      tabIndex={0}
      role="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        cursor: 'pointer',
        border: `1.5px solid ${hovered ? accent : t.border}`,
        padding: '28px 28px 24px',
        background: hovered ? t.cardHoverBg : t.surface,
        transition: 'all 0.2s ease',
        position: 'relative',
        overflow: 'hidden',
        animation: 'fadeUp 0.4s ease forwards',
        animationDelay: `${index * 0.07}s`,
        opacity: 0,
        outline: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 14,
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 10,
            fontWeight: 600,
            color: hovered ? accent : t.textSubtle,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            transition: 'color 0.2s ease',
          }}
        >
          {project.label}
        </span>
        <span
          style={{
            fontFamily: "'Syne Mono', monospace",
            fontSize: 10,
            color: accent,
            background: accent + '18',
            padding: '2px 8px',
            letterSpacing: '0.08em',
          }}
        >
          ● LIVE
        </span>
      </div>
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 20,
          fontWeight: 700,
          color: hovered ? t.cardHoverText : t.text,
          marginBottom: 10,
          letterSpacing: '-0.02em',
          transition: 'color 0.2s ease',
          lineHeight: 1.2,
        }}
      >
        {project.title}
      </div>
      <div
        style={{
          fontFamily: "'Epilogue', sans-serif",
          fontSize: 13.5,
          color: hovered ? t.cardHoverMuted : t.textBody,
          lineHeight: 1.7,
          marginBottom: 18,
          transition: 'color 0.2s ease',
        }}
      >
        {project.description}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 6,
        }}
      >
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {project.tech.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: hovered ? t.cardHoverText + '99' : t.tagColor,
                background: 'transparent',
                border: hovered ? `1px solid ${t.cardHoverText}33` : `1px solid ${t.border}`,
                padding: '2px 7px',
                transition: 'all 0.2s ease',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            color: hovered ? accent : t.textMuted,
            transition: 'color 0.2s ease',
          }}
        >
          Learn more →
        </span>
      </div>
    </div>
  );
}
