'use client';

import { THEMES } from '@/lib/themes';
import type { ThemeColors } from '@/lib/types';

interface GetInTouchProps {
  theme: 'light' | 'dark' | 'azure';
  accent: string;
}

export function GetInTouch({ theme, accent }: GetInTouchProps) {
  const t = THEMES[theme];

  return (
    <section id="contact" style={{ paddingTop: 80, paddingBottom: 40 }}>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 28,
          fontWeight: 700,
          color: t.text,
          letterSpacing: '-0.02em',
          marginBottom: 8,
        }}
      >
        Get in Touch
      </h2>
      <p
        style={{
          fontSize: 14,
          color: t.textMuted,
          marginBottom: 40,
          lineHeight: 1.6,
          fontFamily: "'Epilogue', sans-serif",
        }}
      >
        Download the resume or reach out directly. I respond within one business day.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}
      >
        {/* Resume Card */}
        <div
          style={{
            background: t.surface,
            border: `1.5px solid ${t.border}`,
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            transition: 'all 0.2s ease',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: accent,
                letterSpacing: '0.12em',
                marginBottom: 8,
              }}
            >
              RESUME
            </div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: t.text,
                letterSpacing: '-0.02em',
                marginBottom: 8,
              }}
            >
              Garth Puckerin
            </div>
            <p
              style={{
                fontSize: 13.5,
                color: t.textBody,
                lineHeight: 1.6,
                fontFamily: "'Epilogue', sans-serif",
              }}
            >
              Platform Engineer · Full Stack Developer · AI Solutions Architect
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-resume-gen'))}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: '#fff',
                background: accent,
                border: 'none',
                padding: '10px 24px',
                cursor: 'pointer',
                letterSpacing: '0.03em',
                transition: 'opacity 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Generate PDF
            </button>
          </div>
        </div>

        {/* Contact Info Card */}
        <div
          style={{
            background: theme === 'azure' ? t.surfaceAlt : t.surface,
            border: `1.5px solid ${t.border}`,
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: accent,
                letterSpacing: '0.12em',
                marginBottom: 8,
              }}
            >
              CHANNELS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                {
                  label: 'Email',
                  value: 'garth.puckerin@me.com',
                  href: 'mailto:garth.puckerin@me.com',
                },
                {
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/garthpuckerin',
                  href: 'https://linkedin.com/in/garthpuckerin',
                },
                {
                  label: 'GitHub',
                  value: 'github.com/garthpuckerin',
                  href: 'https://github.com/garthpuckerin',
                },
              ].map((c) => (
                <div key={c.label} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
                  <span
                    style={{
                      fontFamily: "'Syne Mono', monospace",
                      fontSize: 10,
                      color: t.textSubtle,
                      letterSpacing: '0.1em',
                      minWidth: 60,
                    }}
                  >
                    {c.label}
                  </span>
                  <a
                    href={c.href}
                    target={c.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Syne Mono', monospace",
                      fontSize: 12,
                      color: accent,
                      textDecoration: 'none',
                      borderBottom: `1px solid ${accent}33`,
                      paddingBottom: 1,
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = accent + '33')}
                  >
                    {c.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
