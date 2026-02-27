import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

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
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
