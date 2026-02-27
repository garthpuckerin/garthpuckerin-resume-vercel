'use client';

import { useEffect } from 'react';
import type { Project } from '@/lib/types';
import { THEMES } from '@/lib/themes';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  theme: 'light' | 'dark';
  accent: string;
}

/**
 * Project detailed modal adapted from Walmart project aesthetic
 * Integrated with Resume project's theme and accent system
 */
export function ProjectModal({ project, onClose, theme, accent }: ProjectModalProps) {
  const t = THEMES[theme];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      style={{
        position: 'fixed',
        inset: 0,
        background: theme === 'light' ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(4px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: t.surface,
          border: `1px solid ${t.border}`,
          maxWidth: 640,
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 24px 64px rgba(0,0,0,0.25)',
          animation: 'fadeUp 0.3s ease-out',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '24px 24px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 16,
            position: 'sticky',
            top: 0,
            background: t.surface,
            zIndex: 1,
            borderBottom: `1px solid ${t.border}`,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: accent,
                letterSpacing: '0.12em',
                marginBottom: 6,
              }}
            >
              {project.type}
            </div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 22,
                fontWeight: 800,
                color: t.text,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            type="button"
            style={{
              background: 'none',
              border: `1px solid ${t.border}`,
              color: t.textMuted,
              width: 32,
              height: 32,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: 14,
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = accent;
              (e.currentTarget as HTMLButtonElement).style.color = accent;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = t.border;
              (e.currentTarget as HTMLButtonElement).style.color = t.textMuted;
            }}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '24px' }}>
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: t.textSubtle,
                letterSpacing: '0.12em',
                marginBottom: 10,
              }}
            >
              OVERVIEW
            </div>
            <p style={{ fontSize: 14, color: t.textBody, lineHeight: 1.75 }}>
              {project.modal.overview}
            </p>
          </div>

          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: t.textSubtle,
                letterSpacing: '0.12em',
                marginBottom: 10,
              }}
            >
              KEY CAPABILITIES
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              {project.modal.capabilities.map((cap, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: accent, flexShrink: 0, marginTop: 5, fontSize: 6 }}>◆</span>
                  <span style={{ fontSize: 13.5, color: t.textSecondary, lineHeight: 1.65 }}>
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              borderLeft: `3px solid ${accent}`,
              background: t.surfaceAlt,
              padding: '16px 20px',
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: accent,
                letterSpacing: '0.12em',
                marginBottom: 8,
              }}
            >
              ENTERPRISE VALUE
            </div>
            <p
              style={{
                fontSize: 14,
                color: t.text,
                lineHeight: 1.7,
                fontFamily: "'Syne', sans-serif",
                fontWeight: 500,
              }}
            >
              {project.modal.enterpriseValue}
            </p>
          </div>

          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: t.textSubtle,
                letterSpacing: '0.12em',
                marginBottom: 10,
              }}
            >
              EXAMPLE APPLICATIONS
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              {project.modal.useCases.map((uc, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: t.textSubtle, flexShrink: 0, marginTop: 1 }}>·</span>
                  <span style={{ fontSize: 13.5, color: t.textMuted, lineHeight: 1.6 }}>{uc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: t.textSubtle,
                letterSpacing: '0.12em',
                marginBottom: 10,
              }}
            >
              TECHNOLOGY
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "'Syne Mono', monospace",
                    fontSize: 11,
                    color: t.tagColor,
                    background: t.tagBg,
                    border: `1px solid ${t.border}`,
                    padding: '4px 10px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: '#fff',
                background: accent,
                padding: '10px 20px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'opacity 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Live Demo coming soon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
