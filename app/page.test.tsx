import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Homepage from './page';

describe('Homepage', () => {
  beforeEach(() => {
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    });
  });

  it('renders name after mount', async () => {
    render(<Homepage />);
    await vi.waitFor(() => {
      expect(screen.getByRole('heading', { level: 1, name: 'Garth Puckerin' })).toBeInTheDocument();
    });
  });

  it('renders tagline', async () => {
    render(<Homepage />);
    await vi.waitFor(() => {
      expect(
        screen.getByText(/BUSINESS SYSTEMS ANALYST · LEARNING SYSTEMS ARCHITECT/)
      ).toBeInTheDocument();
    });
  });

  it('renders navigation sections', async () => {
    render(<Homepage />);
    await vi.waitFor(() => {
      expect(screen.getByText('Overview')).toBeInTheDocument();
      expect(screen.getByText('Projects')).toBeInTheDocument();
      expect(screen.getByText('Experience')).toBeInTheDocument();
      expect(screen.getByText('Skills')).toBeInTheDocument();
    });
  });

  it('renders Selected Work section', async () => {
    render(<Homepage />);
    await vi.waitFor(() => {
      expect(screen.getByText('Selected Work')).toBeInTheDocument();
    });
  });

  it('renders Work History section', async () => {
    render(<Homepage />);
    await vi.waitFor(() => {
      expect(screen.getByText('Work History')).toBeInTheDocument();
    });
  });

  it('renders Capabilities section', async () => {
    render(<Homepage />);
    await vi.waitFor(() => {
      expect(screen.getByText('Capabilities')).toBeInTheDocument();
    });
  });

  it('renders Get in touch CTA', async () => {
    render(<Homepage />);
    await vi.waitFor(() => {
      expect(screen.getByText('Get in touch')).toBeInTheDocument();
    });
  });
});
