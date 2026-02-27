'use client';

import { useState, useEffect, useRef } from 'react';
import { THEMES } from '@/lib/themes';
import { PROJECTS, EXPERIENCE, SKILLS } from '@/lib/data';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatbotProps {
  theme: 'light' | 'dark' | 'corporate';
  accent: string;
}

export function Chatbot({ theme, accent }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm Garth's resume assistant. Ask me anything about his experience or projects!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = THEMES[theme];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      let response =
        "I'm not sure about that. Try asking about Garth's projects, technical skills, or his current role!";

      const query = userMsg.toLowerCase();

      if (query.includes('project') || query.includes('work') || query.includes('portfolio')) {
        response = `Garth has worked on several key projects including ${PROJECTS.map(
          (p) => p.title
        )
          .slice(0, 3)
          .join(', ')} and more. Which one would you like to hear about?`;
      } else if (query.includes('skill') || query.includes('tech') || query.includes('stack')) {
        const topSkills = SKILLS.flatMap((s) => s.items).slice(0, 5);
        response = `Garth is highly proficient in ${topSkills.join(', ')}, and specializes in Platform Engineering and AI Solutions.`;
      } else if (
        query.includes('contact') ||
        query.includes('email') ||
        query.includes('reach out')
      ) {
        response = 'You can reach Garth at garth.puckerin@me.com or connect with him on LinkedIn!';
      } else if (
        query.includes('experience') ||
        query.includes('role') ||
        query.includes('background')
      ) {
        const current = EXPERIENCE[0];
        response = `Garth is currently a ${current.role} at ${current.company}, where he works on ${current.description.slice(0, 50)}...`;
      } else if (query.includes('hi') || query.includes('hello')) {
        response =
          "Hello! Looking for a summary of Garth's background or specific project details?";
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 1000,
        fontFamily: "'Epilogue', sans-serif",
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: 56,
          height: 56,
          borderRadius: '28px',
          background: accent,
          color: '#fff',
          border: 'none',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 24,
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: 76,
            right: 0,
            width: 340,
            height: 480,
            background: t.surface,
            border: `1px solid ${t.border}`,
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: t.surfaceAlt,
              borderBottom: `1px solid ${t.border}`,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: '4px', background: '#10b981' }} />
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: t.text,
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Resume Assistant
            </span>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            style={{
              flex: 1,
              padding: '20px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: m.role === 'user' ? accent : t.surfaceAlt,
                  color: m.role === 'user' ? '#fff' : t.text,
                  padding: '10px 14px',
                  fontSize: 13,
                  lineHeight: 1.5,
                  borderRadius: m.role === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                }}
              >
                {m.content}
              </div>
            ))}
            {isTyping && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '10px 14px',
                  background: t.surfaceAlt,
                  borderRadius: '14px 14px 14px 2px',
                  display: 'flex',
                  gap: 4,
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '2px',
                    background: t.textMuted,
                    animation: 'pulse 1s infinite',
                  }}
                />
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '2px',
                    background: t.textMuted,
                    animation: 'pulse 1s infinite 0.2s',
                  }}
                />
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '2px',
                    background: t.textMuted,
                    animation: 'pulse 1s infinite 0.4s',
                  }}
                />
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{ padding: '16px', borderTop: `1px solid ${t.border}` }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                style={{
                  flex: 1,
                  background: t.bg,
                  border: `1px solid ${t.border}`,
                  padding: '8px 12px',
                  fontSize: 13,
                  color: t.text,
                  outline: 'none',
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  background: accent,
                  color: '#fff',
                  border: 'none',
                  padding: '8px 14px',
                  cursor: 'pointer',
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
      `}</style>
    </div>
  );
}
