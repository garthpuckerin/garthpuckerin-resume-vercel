import { describe, it, expect } from 'vitest';
import { THEMES } from './themes';

describe('THEMES', () => {
  it('has light and dark themes', () => {
    expect(THEMES).toHaveProperty('light');
    expect(THEMES).toHaveProperty('dark');
  });

  it('each theme has required color keys', () => {
    const requiredKeys = [
      'bg',
      'surface',
      'border',
      'text',
      'textMuted',
      'textBody',
      'headerBg',
      'tagBg',
      'cardHoverBg',
      'cardHoverText',
      'footerBg',
      'toggleBg',
      'toggleColor',
    ];

    (['light', 'dark'] as const).forEach((mode) => {
      requiredKeys.forEach((key) => {
        expect(THEMES[mode]).toHaveProperty(key);
        expect(THEMES[mode][key as keyof typeof THEMES.light]).toBeTruthy();
      });
    });
  });

  it('light theme has light background', () => {
    expect(THEMES.light.bg).toMatch(/^#[fF0-9a-fA-F]+|rgba?/);
    expect(THEMES.light.text).toBe('#0f0f0f');
  });

  it('dark theme has dark background', () => {
    expect(THEMES.dark.bg).toBe('#0a0a0a');
    expect(THEMES.dark.text).toBe('#f0f0ee');
  });
});
