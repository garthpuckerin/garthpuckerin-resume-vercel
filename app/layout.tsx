import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Garth Puckerin | Business Systems Analyst · Learning Systems Architect',
  description:
    'Enterprise systems integration, LMS architecture, and full-stack development. Docebo, Workday, Next.js, and AI-powered learning tools.',
  keywords: [
    'Garth Puckerin',
    'LMS',
    'Docebo',
    'Learning Management',
    'Enterprise Integration',
    'Business Systems Analyst',
  ],
  authors: [{ name: 'Garth Puckerin', url: 'https://github.com/garthpuckerin' }],
  openGraph: {
    title: 'Garth Puckerin | Business Systems Analyst · Learning Systems Architect',
    description: 'Enterprise systems integration, LMS architecture, and full-stack development.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
