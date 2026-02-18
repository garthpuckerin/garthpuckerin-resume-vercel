import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '@/lib/data';

describe('ProjectCard', () => {
  const project = PROJECTS[0];
  const defaultProps = {
    project,
    index: 0,
    theme: 'light' as const,
    accent: '#3b82f6',
  };

  it('renders project title', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.getByText(project.title)).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.getByText(project.description)).toBeInTheDocument();
  });

  it('renders LIVE badge', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.getByText(/● LIVE/)).toBeInTheDocument();
  });

  it('renders project label', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.getByText(project.label)).toBeInTheDocument();
  });

  it('renders all tech tags', () => {
    render(<ProjectCard {...defaultProps} />);
    project.tech.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('links to project href', () => {
    render(<ProjectCard {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', project.href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders View link', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.getByText(/View →/)).toBeInTheDocument();
  });
});
