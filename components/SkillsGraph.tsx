'use client';

import { useState, useEffect } from 'react';
import { THEMES } from '@/lib/themes';
import { SKILLS } from '@/lib/data';

interface SkillsGraphProps {
  theme: 'light' | 'dark' | 'corporate';
  accent: string;
}

export function SkillsGraph({ theme, accent }: SkillsGraphProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const t = THEMES[theme];

  // Flatten skills for the graph
  const nodes = SKILLS.flatMap((g) => g.items.map((item) => ({ id: item, group: g.group })));

  // Create some arbitrary connections between related tech
  const links = [
    { source: 'Next.js', target: 'React' },
    { source: 'TypeScript', target: 'Next.js' },
    { source: 'Tailwind CSS', target: 'React' },
    { source: 'Node.js', target: 'TypeScript' },
    { source: 'PostgreSQL', target: 'Node.js' },
    { source: 'Docker', target: 'Kubernetes' },
    { source: 'AWS', target: 'Docker' },
    { source: 'Terraform', target: 'AWS' },
    { source: 'LLMs', target: 'Python' },
    { source: 'LangChain', target: 'LLMs' },
    { source: 'PyTorch', target: 'Python' },
    { source: 'CI/CD Pipelines', target: 'GitHub Actions' },
  ];

  return (
    <section id="skills-graph" style={{ padding: '80px 0' }}>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 28,
          fontWeight: 700,
          color: t.text,
          letterSpacing: '-0.02em',
          marginBottom: 12,
        }}
      >
        Domain Connections
      </h2>
      <p
        style={{
          fontSize: 14,
          color: t.textMuted,
          marginBottom: 40,
          fontFamily: "'Epilogue', sans-serif",
        }}
      >
        Interactive map of technical expertise and system relationships.
      </p>

      <div
        style={{
          height: 500,
          background: t.surfaceAlt,
          border: `1px solid ${t.border}`,
          borderRadius: '4px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 800 500" style={{ cursor: 'crosshair' }}>
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Lines */}
          {links.map((link, i) => {
            const sNode = nodes.find((n) => n.id === link.source);
            const tNode = nodes.find((n) => n.id === link.target);
            if (!sNode || !tNode) return null;

            // Simple deterministic positioning for now
            const getPos = (id: string) => {
              let hash = 0;
              for (let i = 0; i < id.length; i++) hash = id.charCodeAt(i) + ((hash << 5) - hash);
              return { x: 100 + (Math.abs(hash) % 600), y: 50 + (Math.abs(hash >> 8) % 400) };
            };

            const p1 = getPos(link.source);
            const p2 = getPos(link.target);
            const isActive = hoveredNode === link.source || hoveredNode === link.target;

            return (
              <line
                key={i}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke={isActive ? accent : t.border}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray={isActive ? 'none' : '4 4'}
                style={{ transition: 'all 0.3s ease' }}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            let hash = 0;
            for (let i = 0; i < node.id.length; i++)
              hash = node.id.charCodeAt(i) + ((hash << 5) - hash);
            const x = 100 + (Math.abs(hash) % 600);
            const y = 50 + (Math.abs(hash >> 8) % 400);
            const isHovered = hoveredNode === node.id;

            return (
              <g
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 8 : 4}
                  fill={isHovered ? accent : t.textSubtle}
                  filter={isHovered ? 'url(#glow)' : ''}
                  style={{ transition: 'all 0.2s ease', cursor: 'pointer' }}
                />
                {isHovered && (
                  <text
                    x={x}
                    y={y - 15}
                    textAnchor="middle"
                    fill={t.text}
                    style={{
                      fontFamily: "'Syne Mono', monospace",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {node.id.toUpperCase()}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, background: accent, borderRadius: '50%' }} />
            <span
              style={{ fontSize: 10, color: t.textMuted, fontFamily: "'Syne Mono', monospace" }}
            >
              ACTIVE CONNECTION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
