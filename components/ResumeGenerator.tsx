'use client';

import { useState, useEffect } from 'react';
import { THEMES } from '@/lib/themes';
import { PROJECTS, EXPERIENCE, SKILLS } from '@/lib/data';

interface ResumeGeneratorProps {
  theme: 'light' | 'dark' | 'corporate';
  accent: string;
}

export function ResumeGenerator({ theme, accent }: ResumeGeneratorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = THEMES[theme];

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

      {/* Actual Resume Content (ATS Optimized) */}
      <div
        id="ats-resume"
        style={{
          width: '100%',
          maxWidth: '800px',
          background: '#fff',
          color: '#000',
          padding: '60px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          fontFamily: 'serif', // Better for ATS
          lineHeight: 1.5,
        }}
      >
        <h1 style={{ fontSize: '28pt', marginBottom: '4pt', fontFamily: 'sans-serif' }}>
          Garth Puckerin
        </h1>
        <p style={{ fontSize: '11pt', marginBottom: '20pt', color: '#444' }}>
          Platform Engineer · garth.puckerin@me.com · linkedin.com/in/garthpuckerin
        </p>

        <section style={{ marginBottom: '24pt' }}>
          <h2
            style={{
              fontSize: '14pt',
              borderBottom: '1px solid #000',
              textTransform: 'uppercase',
              marginBottom: '8pt',
              fontFamily: 'sans-serif',
            }}
          >
            Skills
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10pt',
              fontSize: '10pt',
            }}
          >
            {SKILLS.map((s) => (
              <div key={s.group}>
                <strong>{s.group}:</strong> {s.items.join(', ')}
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '24pt' }}>
          <h2
            style={{
              fontSize: '14pt',
              borderBottom: '1px solid #000',
              textTransform: 'uppercase',
              marginBottom: '8pt',
              fontFamily: 'sans-serif',
            }}
          >
            Experience
          </h2>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} style={{ marginBottom: '14pt' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: 'bold',
                  fontSize: '11pt',
                }}
              >
                <span>
                  {exp.role} @ {exp.company}
                </span>
                <span>{exp.period}</span>
              </div>
              <p style={{ fontSize: '10pt', marginTop: '4pt', whiteSpace: 'pre-line' }}>
                {exp.description}
              </p>
            </div>
          ))}
        </section>

        <section>
          <h2
            style={{
              fontSize: '14pt',
              borderBottom: '1px solid #000',
              textTransform: 'uppercase',
              marginBottom: '8pt',
              fontFamily: 'sans-serif',
            }}
          >
            Selected Projects
          </h2>
          {PROJECTS.map((p, i) => (
            <div key={i} style={{ marginBottom: '10pt' }}>
              <div style={{ fontWeight: 'bold', fontSize: '11pt' }}>{p.title}</div>
              <p style={{ fontSize: '10pt', marginTop: '2pt' }}>{p.description}</p>
              <p style={{ fontSize: '9pt', color: '#666', marginTop: '2pt' }}>
                Tech: {p.tech.join(', ')}
              </p>
            </div>
          ))}
        </section>
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
