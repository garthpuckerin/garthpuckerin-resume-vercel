'use client';

import { useState, useEffect } from 'react';
import { PROJECTS, EXPERIENCE, SKILLS } from '@/lib/data';

interface ResumeGeneratorProps {
  accent: string;
}

export function ResumeGenerator({ accent }: ResumeGeneratorProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-resume-gen', handleOpen);
    return () => window.removeEventListener('open-resume-gen', handleOpen);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 3000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 20px',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 20,
          color: '#fff',
          fontFamily: "'Syne', sans-serif",
        }}
        className="no-print"
      >
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: 'none',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          ✕ Close Preview
        </button>
        <button
          onClick={handlePrint}
          style={{
            background: accent,
            border: 'none',
            color: '#fff',
            padding: '8px 24px',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Print / Save as PDF
        </button>
      </div>

      {/* Actual Resume Content - Premium & ATS Optimized */}
      <div
        id="ats-resume"
        style={{
          width: '100%',
          maxWidth: '850px',
          background: '#fff',
          color: '#1a1a1a',
          padding: '50px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
          fontFamily: 'var(--font-inter), sans-serif',
          lineHeight: 1.6,
          display: 'grid',
          gridTemplateColumns: '1fr 240px',
          gap: '40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Left Accent Bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '6px',
            background: accent,
          }}
        />

        {/* Main Column */}
        <div>
          <header style={{ marginBottom: '32px' }}>
            <h1
              style={{
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: '36pt',
                fontWeight: 800,
                color: '#000',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '8px',
              }}
            >
              Garth Puckerin
            </h1>
            <div
              style={{
                fontSize: '14pt',
                fontWeight: 500,
                color: accent,
                fontFamily: 'var(--font-outfit), sans-serif',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Platform Engineer · Learning Systems Architect
            </div>
          </header>

          <section style={{ marginBottom: '32px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: '12pt',
                fontWeight: 800,
                color: '#000',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
                borderBottom: `2px solid ${accent}22`,
                paddingBottom: '4px',
              }}
            >
              Professional Experience
            </h2>
            {EXPERIENCE.map((exp, i) => (
              <div key={i} style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '4px',
                  }}
                >
                  <h3 style={{ fontSize: '11pt', fontWeight: 700, margin: 0 }}>
                    {exp.role} · <span style={{ color: '#666' }}>{exp.company}</span>
                  </h3>
                  <span style={{ fontSize: '9pt', color: '#888', fontWeight: 500 }}>
                    {exp.period}
                  </span>
                </div>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '18px',
                    fontSize: '10pt',
                    color: '#333',
                  }}
                >
                  {exp.bullets.map((bullet, bi) => (
                    <li key={bi} style={{ marginBottom: '4px' }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '12pt',
                fontWeight: 800,
                color: '#000',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
                borderBottom: `2px solid ${accent}22`,
                paddingBottom: '4px',
              }}
            >
              Featured Projects
            </h2>
            {PROJECTS.map((p, i) => (
              <div key={i} style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '11pt', fontWeight: 700, color: '#000' }}>{p.title}</div>
                <p style={{ fontSize: '10pt', margin: '4px 0', color: '#444' }}>{p.description}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '8pt',
                        background: '#f0f0f0',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        color: '#666',
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Sidebar */}
        <div
          style={{
            borderLeft: '1px solid #eee',
            paddingLeft: '20px',
            background: '#fafafa',
            margin: '-50px -50px -50px 0',
            padding: '50px 25px',
          }}
        >
          <section style={{ marginBottom: '32px' }}>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '10pt',
                fontWeight: 800,
                color: '#000',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
              }}
            >
              Contact
            </h2>
            <div
              style={{
                fontSize: '9pt',
                color: '#444',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div>
                <strong>Email:</strong>
                <br />
                garth.puckerin@me.com
              </div>
              <div>
                <strong>LinkedIn:</strong>
                <br />
                linkedin.com/in/garthpuckerin
              </div>
              <div>
                <strong>Portfolio:</strong>
                <br />
                garth.puckerin.com
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '10pt',
                fontWeight: 800,
                color: '#000',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
              }}
            >
              Expertise
            </h2>
            {SKILLS.map((s) => (
              <div key={s.group} style={{ marginBottom: '12px' }}>
                <div
                  style={{
                    fontSize: '8pt',
                    fontWeight: 700,
                    color: accent,
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  {s.group}
                </div>
                <div style={{ fontSize: '9pt', color: '#444', lineHeight: 1.4 }}>
                  {s.items.join(', ')}
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '10pt',
                fontWeight: 800,
                color: '#000',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
              }}
            >
              Education
            </h2>
            <div style={{ fontSize: '9pt', color: '#444' }}>
              <strong>Business Systems Analysis</strong>
              <br />
              Enterprise Integration Specialist
              <br />
              <span style={{ color: '#888', fontSize: '8pt' }}>Professional Certification</span>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #fff !important; margin: 0 !important; }
          #ats-resume { box-shadow: none !important; padding: 0 !important; width: 100% !important; max-width: none !important; }
        }
      `}</style>
    </div>
  );
}
