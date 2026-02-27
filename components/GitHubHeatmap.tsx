'use client';

import { THEMES } from '@/lib/themes';

interface GitHubHeatmapProps {
  theme: 'light' | 'dark' | 'azure';
  accent: string;
}

export function GitHubHeatmap({ theme, accent }: GitHubHeatmapProps) {
  const t = THEMES[theme];

  // Simulated contribution data
  const days = Array.from({ length: 52 * 7 }, (_, i) => Math.floor(Math.random() * 5));

  return (
    <section id="github" style={{ padding: '40px 0' }}>
      <div
        style={{
          background: t.surface,
          border: `1px solid ${t.border}`,
          padding: '24px',
          borderRadius: '4px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: accent,
                letterSpacing: '0.12em',
                marginBottom: 4,
              }}
            >
              OPEN SOURCE
            </div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: t.text,
              }}
            >
              Contribution Activity
            </div>
          </div>
          <a
            href="https://github.com/garthpuckerin"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: 12,
              color: t.textMuted,
              textDecoration: 'none',
              fontFamily: "'Syne Mono', monospace",
            }}
          >
            VIEW PROFILE ↗
          </a>
        </div>

        <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          {days.map((level, i) => (
            <div
              key={i}
              style={{
                width: 10,
                height: 10,
                background: level === 0 ? t.bg : accent,
                opacity: level === 0 ? 1 : 0.2 + level * 0.2,
                borderRadius: '2px',
                transition: 'all 0.2s ease',
              }}
              title={`${level} contributions`}
            />
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 8,
            marginTop: 12,
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 10, color: t.textMuted, fontFamily: "'Syne Mono', monospace" }}>
            LESS
          </span>
          <div style={{ display: 'flex', gap: 3 }}>
            {[0, 1, 2, 3, 4].map((l) => (
              <div
                key={l}
                style={{
                  width: 10,
                  height: 10,
                  background: l === 0 ? t.bg : accent,
                  opacity: l === 0 ? 1 : 0.2 + l * 0.2,
                  borderRadius: '2px',
                }}
              />
            ))}
          </div>
          <span style={{ fontSize: 10, color: t.textMuted, fontFamily: "'Syne Mono', monospace" }}>
            MORE
          </span>
        </div>
      </div>
    </section>
  );
}
