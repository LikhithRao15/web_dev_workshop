import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import { getSavedProgress, saveProgress, getSavedTheme, saveTheme } from '../src/utils/storage';

describe('Storage Utility', () => {
  let mockStorage = {};

  beforeAll(() => {
    const storageMock = {
      getItem: (key) => (key in mockStorage ? mockStorage[key] : null),
      setItem: (key, value) => {
        mockStorage[key] = String(value);
      },
      removeItem: (key) => {
        delete mockStorage[key];
      },
      clear: () => {
        mockStorage = {};
      }
    };

    Object.defineProperty(globalThis, 'localStorage', {
      value: storageMock,
      writable: true
    });
  });

  beforeEach(() => {
    localStorage.clear();
  });

  it('returns default progress when storage is empty', () => {
    const progress = getSavedProgress();
    expect(progress).toEqual({ completed: [], xp: 0 });
  });

  it('handles malformed JSON safely without throwing', () => {
    localStorage.setItem('codebloom-progress', 'INVALID_JSON{{{');
    const progress = getSavedProgress();
    expect(progress).toEqual({ completed: [], xp: 0 });
  });

  it('correctly saves and retrieves progress', () => {
    const data = { completed: ['html-0', 'html-1'], xp: 40 };
    saveProgress(data);
    const retrieved = getSavedProgress();
    expect(retrieved).toEqual(data);
  });

  it('correctly handles theme persistence', () => {
    expect(getSavedTheme()).toBe('light');
    saveTheme('dark');
    expect(getSavedTheme()).toBe('dark');
  });
});
