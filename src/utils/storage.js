const STORAGE_KEY = 'codebloom-progress';
const THEME_KEY = 'codebloom-theme';

export function getSavedProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completed: [], xp: 0 };
    const parsed = JSON.parse(raw);
    return {
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      xp: typeof parsed.xp === 'number' ? parsed.xp : 0
    };
  } catch {
    return { completed: [], xp: 0 };
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.warn('Unable to persist CodeBloom progress:', err);
  }
}

export function getSavedTheme() {
  try {
    const theme = localStorage.getItem(THEME_KEY);
    if (theme === 'dark' || theme === 'light') return theme;
  } catch {
    // fallback
  }
  return 'light';
}

export function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (err) {
    console.warn('Unable to persist theme:', err);
  }
}
