'use client';

import { useState, useEffect } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { GetInTouch } from '@/components/GetInTouch';
import { Chatbot } from '@/components/Chatbot';
import { ResumeGenerator } from '@/components/ResumeGenerator';
import { ACCENTS, PROJECTS, EXPERIENCE, SKILLS } from '@/lib/data';
import type { Project } from '@/lib/types';
import { THEMES } from '@/lib/themes';

const CONTACT_LINKS = [
  { text: 'garth.puckerin@me.com', href: 'mailto:garth.puckerin@me.com' },
  { text: 'linkedin.com/in/garthpuckerin', href: 'https://linkedin.com/in/garthpuckerin' },
  { text: 'github.com/garthpuckerin', href: 'https://github.com/garthpuckerin' },
];

const FOOTER_LINKS = [
  { text: 'Email', href: 'mailto:garth.puckerin@me.com' },
  { text: 'LinkedIn', href: 'https://linkedin.com/in/garthpuckerin' },
  { text: 'GitHub', href: 'https://github.com/garthpuckerin' },
];

export default function Homepage() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'azure'>('light');
  const [accentId, setAccentId] = useState('blue');
  const [activeSection, setActiveSection] = useState('overview');
  const [activeModal, setActiveModal] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('gp-theme') as 'light' | 'dark' | null;
    const savedAccent = localStorage.getItem('gp-accent');
    if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme);
    if (savedAccent) setAccentId(savedAccent);
  }, []);

  const toggleTheme = () => {
    const modes: ('light' | 'dark' | 'azure')[] = ['light', 'dark', 'azure'];
    const next = modes[(modes.indexOf(theme) + 1) % modes.length];
    setTheme(next);
    localStorage.setItem('gp-theme', next);
  };

  const handleAccent = (id: string) => {
    setAccentId(id);
    localStorage.setItem('gp-accent', id);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const t = THEMES[theme];
  const accent = ACCENTS.find((a) => a.id === accentId)?.color ?? '#3b82f6';

  if (!mounted) return null;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: t.bg,
        fontFamily: "'Epilogue', sans-serif",
        transition: 'background 0.25s ease, color 0.25s ease',
        color: t.text,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Syne+Mono&family=Epilogue:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: ${accent}; color: #fff; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${t.bg}; }
        ::-webkit-scrollbar-thumb { background: ${t.border}; border-radius: 2px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .nav-link:hover { color: ${accent} !important; border-bottom-color: ${accent} !important; }
        .contact-link:hover { color: ${accent} !important; border-bottom-color: ${accent} !important; }
        .footer-link:hover { color: ${accent} !important; }
        .skill-tag:hover { background: ${accent} !important; color: #fff !important; }
        .exp-row:hover { background: ${t.expHover} !important; }
        .accent-dot { transition: all 0.15s ease !important; }
        .accent-dot:hover { transform: scale(1.25) !important; }
        .theme-toggle:hover { opacity: 0.8 !important; }
        .cta-btn:hover { opacity: 0.85 !important; }
      `}</style>

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: t.headerBg,
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${t.border}`,
          padding: '0 40px',
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.25s ease, border-color 0.25s ease',
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 15,
            fontWeight: 700,
            color: t.text,
            letterSpacing: '-0.01em',
          }}
        >
          GP
        </span>

        <nav style={{ display: 'flex', gap: 28 }}>
          {['overview', 'projects', 'experience', 'skills', 'contact'].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(s);
              }}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: activeSection === s ? accent : t.textMuted,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                paddingBottom: 2,
                borderBottom: `1.5px solid ${activeSection === s ? accent : 'transparent'}`,
                transition: 'all 0.15s ease',
              }}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-resume-gen'))}
            className="nav-link"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: accent,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.02em',
              paddingBottom: 2,
              borderBottom: '1.5px solid transparent',
              transition: 'all 0.15s ease',
            }}
          >
            Resume
          </button>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
            {ACCENTS.map((a) => (
              <button
                key={a.id}
                className="accent-dot"
                onClick={() => handleAccent(a.id)}
                title={a.label}
                type="button"
                style={{
                  width: accentId === a.id ? 14 : 9,
                  height: accentId === a.id ? 14 : 9,
                  borderRadius: '50%',
                  background: a.color,
                  border: accentId === a.id ? `2px solid ${t.text}` : '2px solid transparent',
                  cursor: 'pointer',
                  padding: 0,
                  outline: 'none',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            type="button"
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: 10,
              background: t.toggleBg,
              color: t.toggleColor,
              border: 'none',
              padding: '6px 14px',
              borderRadius: '20px',
              cursor: 'pointer',
              letterSpacing: '0.05em',
              fontWeight: 700,
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            {theme === 'light' ? '■ LIGHT' : theme === 'dark' ? '■ DARK' : '■ AZURE'}
          </button>
          <a
            href="mailto:garth.puckerin@me.com"
            className="cta-btn"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: '#fff',
              background: accent,
              padding: '7px 16px',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'opacity 0.15s ease',
            }}
          >
            Get in touch
          </a>
        </div>
      </header>

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '0 40px 120px' }}>
        <section
          id="overview"
          style={{
            paddingTop: 80,
            paddingBottom: 80,
            borderBottom: `1px solid ${t.border}`,
          }}
        >
          <div
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: 11,
              color: accent,
              letterSpacing: '0.14em',
              marginBottom: 24,
              animation: 'fadeUp 0.5s ease forwards',
            }}
          >
            BUSINESS SYSTEMS ANALYST · LEARNING SYSTEMS ARCHITECT · FULL-STACK
          </div>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 800,
              color: t.text,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: 28,
              animation: 'fadeUp 0.5s ease 0.05s forwards',
              opacity: 0,
            }}
          >
            Garth Puckerin
          </h1>
          <div
            style={{
              maxWidth: 600,
              animation: 'fadeUp 0.5s ease 0.1s forwards',
              opacity: 0,
            }}
          >
            <p style={{ fontSize: 17, color: t.textBody, lineHeight: 1.75, marginBottom: 16 }}>
              I make enterprise systems work together — the integrations, the configuration, the
              documentation that keeps things running when organizations scale faster than their
              tools were designed for.
            </p>
            <p style={{ fontSize: 17, color: t.textBody, lineHeight: 1.75, marginBottom: 16 }}>
              Along the way I learned to code — not to become an engineer, but because I got tired
              of waiting for someone else to build the automation I needed. Now I build my own
              tooling when the situation calls for it.
            </p>
            <p style={{ fontSize: 17, color: t.textBody, lineHeight: 1.75 }}>
              Recently I&apos;ve been working on a harder problem: how do you keep training content
              accurate when the product changes weekly? The answer isn&apos;t more writers —
              it&apos;s architecture. Canonical sources, modular components, AI that adapts content
              while humans review.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 24,
              marginTop: 40,
              flexWrap: 'wrap',
              alignItems: 'center',
              animation: 'fadeUp 0.5s ease 0.15s forwards',
              opacity: 0,
            }}
          >
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.text}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact-link"
                style={{
                  fontFamily: "'Syne Mono', monospace",
                  fontSize: 12,
                  color: t.textMuted,
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: 1,
                  transition: 'all 0.15s ease',
                }}
              >
                {link.text}
              </a>
            ))}
            <span
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 11,
                color: accent,
                background: accent + '18',
                padding: '4px 12px',
                border: `1px solid ${accent}40`,
              }}
            >
              ● Open to opportunities
            </span>
          </div>
        </section>

        <section
          id="projects"
          style={{
            paddingTop: 72,
            paddingBottom: 72,
            borderBottom: `1px solid ${t.border}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 36,
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: t.text,
                letterSpacing: '-0.02em',
              }}
            >
              Selected Work
            </h2>
            <span
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 11,
                color: t.textSubtle,
                letterSpacing: '0.1em',
              }}
            >
              4 LIVE PROJECTS
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                theme={theme}
                accent={accent}
                onOpen={setActiveModal}
              />
            ))}
          </div>
        </section>

        <section
          id="experience"
          style={{
            paddingTop: 72,
            paddingBottom: 72,
            borderBottom: `1px solid ${t.border}`,
          }}
        >
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 28,
              fontWeight: 700,
              color: t.text,
              letterSpacing: '-0.02em',
              marginBottom: 36,
            }}
          >
            Work History
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {EXPERIENCE.map((job, i) => (
              <div
                key={i}
                className="exp-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: 24,
                  padding: '24px 20px',
                  borderTop: `1px solid ${t.border}`,
                  borderBottom: i === EXPERIENCE.length - 1 ? `1px solid ${t.border}` : 'none',
                  transition: 'background 0.15s ease',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne Mono', monospace",
                      fontSize: 11,
                      color: t.textSubtle,
                      letterSpacing: '0.06em',
                      marginBottom: 6,
                      lineHeight: 1.5,
                    }}
                  >
                    {job.period}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: t.textSecondary,
                      lineHeight: 1.4,
                    }}
                  >
                    {job.company}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: t.text,
                      marginBottom: 10,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {job.role}
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 5,
                    }}
                  >
                    {job.bullets.map((b, j) => (
                      <li
                        key={j}
                        style={{
                          display: 'flex',
                          gap: 10,
                          alignItems: 'flex-start',
                        }}
                      >
                        <span
                          style={{
                            color: accent,
                            flexShrink: 0,
                            marginTop: 4,
                            fontSize: 8,
                          }}
                        >
                          ◆
                        </span>
                        <span
                          style={{
                            fontSize: 13.5,
                            color: t.textSecondary,
                            lineHeight: 1.65,
                          }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 20,
              padding: '20px',
              border: `1px solid ${t.border}`,
              background: t.surface,
              transition: 'background 0.25s ease',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 24 }}>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne Mono', monospace",
                    fontSize: 11,
                    color: t.textSubtle,
                    letterSpacing: '0.06em',
                    marginBottom: 4,
                  }}
                >
                  2018
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: t.textSecondary,
                  }}
                >
                  NYC&DA
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: t.text,
                    marginBottom: 4,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Full Stack Software Engineering
                </div>
                <div style={{ fontSize: 13.5, color: t.textMuted, lineHeight: 1.6 }}>
                  New York Code & Design Academy · React, FastAPI, Django, PostgreSQL, REST API
                  design, Agile delivery
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" style={{ paddingTop: 72 }}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 28,
              fontWeight: 700,
              color: t.text,
              letterSpacing: '-0.02em',
              marginBottom: 36,
            }}
          >
            Capabilities
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            {SKILLS.map((group) => (
              <div key={group.group}>
                <div
                  style={{
                    fontFamily: "'Syne Mono', monospace",
                    fontSize: 10,
                    color: accent,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}
                >
                  {group.group}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="skill-tag"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 12,
                        fontWeight: 500,
                        color: t.tagColor,
                        background: t.tagBg,
                        padding: '5px 12px',
                        cursor: 'default',
                        transition: 'all 0.15s ease',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <GetInTouch theme={theme} accent={accent} />
      </main>

      <footer
        style={{
          borderTop: `1px solid ${t.border}`,
          padding: '24px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: t.footerBg,
          transition: 'background 0.25s ease, border-color 0.25s ease',
          marginTop: 80,
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: t.text,
          }}
        >
          Garth Puckerin
        </span>
        <div style={{ display: 'flex', gap: 20 }}>
          {FOOTER_LINKS.map((l) => (
            <a
              key={l.text}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="footer-link"
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 11,
                color: t.textSubtle,
                textDecoration: 'none',
                letterSpacing: '0.06em',
                transition: 'color 0.15s ease',
              }}
            >
              {l.text}
            </a>
          ))}
        </div>
      </footer>

      {activeModal && (
        <ProjectModal
          project={activeModal}
          onClose={() => setActiveModal(null)}
          theme={theme}
          accent={accent}
        />
      )}

      <Chatbot theme={theme} accent={accent} />
      <ResumeGenerator theme={theme} accent={accent} />
    </div>
  );
}
