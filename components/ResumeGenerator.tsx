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

      {/* Actual Resume Content (ATS Optimized Single-Column Layout) */}
      <div id="ats-resume" className="resume-body">
        <header>
          <h1>Garth Puckerin</h1>
          <div className="subtitle">AI-Native Enablement & Learning Systems Architect</div>
          <div className="contact">
            garth.puckerin@me.com · (718) 310-8707 · linkedin.com/in/garthpuckerin ·
            github.com/garthpuckerin
          </div>
          <p className="summary">
            I design the systems that govern learning content — not just the content itself. With
            10+ years operating enterprise learning platforms and a deep technical background in
            APIs and integrations, I build AI-native enablement architectures where training
            materials are modular, adaptive, and maintainable at scale.
          </p>
        </header>

        <section>
          <h2>Core Competencies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <strong>Systems Architecture</strong>
              Modular content architectures, knowledge graphs, canonical sources of truth,
              template-driven content pipelines
            </div>
            <div className="skill-category">
              <strong>Enterprise LMS</strong>
              Docebo, Workday Learning, SuccessFactors, SumTotal, SCORM/xAPI, compliance training
            </div>
            <div className="skill-category">
              <strong>Integration & APIs</strong>
              REST APIs, SSO/OAuth, Workday, Salesforce, LinkedIn Learning, QuickSight, event-driven
              architecture
            </div>
            <div className="skill-category">
              <strong>Technical Stack</strong>
              Python, FastAPI, Neo4j, PostgreSQL, Docker, NATS, Temporal, Claude/OpenAI APIs
            </div>
          </div>
        </section>

        <section>
          <h2>Representative Projects</h2>
          {PROJECTS.map((p, i) => (
            <div className="project" key={i}>
              <div className="project-header-inline">
                <h3>{p.title}</h3>
                {p.type && <div className="project-type"> — {p.type}</div>}
              </div>
              <p>{p.description}</p>
              <div className="tech">{p.tech.join(' · ')}</div>
            </div>
          ))}
        </section>

        <section>
          <h2>Professional Experience</h2>
          {EXPERIENCE.map((exp, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <span className="dates">{exp.period}</span>
              </div>
              <div className="company">{exp.company}</div>
              <ul>
                {exp.bullets.map((bullet, bi) => (
                  <li key={bi}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Education & Training</h2>
          <div className="exp-item">
            <div className="exp-header">
              <h3>Full Stack Software Engineering</h3>
              <span className="dates">2018</span>
            </div>
            <div className="company">New York Code + Design Academy</div>
            <ul>
              <li>Full stack engineering boot camp graduate</li>
              <li>
                Built production applications using React, FastAPI, Django, PostgreSQL, Docker
              </li>
              <li>Designed microservices architectures and REST API systems</li>
              <li>
                Active builder using AI-assisted development workflows — shipping complex systems
                rapidly
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <div className="skill-category" key={i}>
                <strong>{s.group}</strong>
                {s.items.join(', ')}
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .resume-body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 10pt;
          line-height: 1.4;
          color: #1a1a1a;
          background: #fff;
          width: 100%;
          max-width: 8.5in;
          margin: 0 auto;
          padding: 0.5in;
          box-sizing: border-box;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-align: left;
        }

        .resume-body * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .resume-body header {
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 2px solid #2a2a2a;
        }

        .resume-body h1 {
          font-size: 20pt;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .resume-body .subtitle {
          font-size: 11pt;
          color: #555;
          margin-bottom: 6px;
        }

        .resume-body .contact {
          font-size: 9pt;
          color: #444;
        }

        .resume-body .summary {
          font-size: 9.5pt;
          margin-top: 10px;
        }

        .resume-body section {
          margin-bottom: 14px;
        }

        .resume-body h2 {
          font-size: 11pt;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 3px;
          margin-bottom: 8px;
        }

        /* Experience */
        .resume-body .exp-item {
          margin-bottom: 10px;
        }
        .resume-body .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .resume-body .exp-header h3 {
          font-size: 10pt;
          font-weight: 600;
        }
        .resume-body .dates {
          font-size: 9pt;
          color: #666;
        }
        .resume-body .company {
          font-size: 9pt;
          font-style: italic;
          color: #555;
          margin-bottom: 3px;
        }
        .resume-body ul {
          margin-left: 16px;
          font-size: 9pt;
        }
        .resume-body li {
          margin-bottom: 2px;
        }

        /* Projects */
        .resume-body .project {
          margin-bottom: 8px;
        }
        .resume-body .project-header-inline h3 {
          font-size: 10pt;
          font-weight: 600;
          display: inline;
        }
        .resume-body .project-type {
          font-size: 8pt;
          color: #666;
          font-style: italic;
          display: inline;
        }
        .resume-body .project p {
          font-size: 9pt;
          margin-top: 2px;
        }
        .resume-body .tech {
          font-size: 8pt;
          color: #555;
          margin-top: 2px;
        }

        /* Skills */
        .resume-body .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          font-size: 9pt;
        }
        .resume-body .skill-category strong {
          display: block;
          font-size: 9pt;
          margin-bottom: 2px;
        }

        @media print {
          @page {
            margin: 0.5in;
            size: letter;
          }
          .no-print {
            display: none !important;
          }
          body {
            background: #fff !important;
            margin: 0 !important;
          }
          .resume-body {
            box-shadow: none !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: none !important;
          }
        }
      `}</style>
    </div>
  );
}
