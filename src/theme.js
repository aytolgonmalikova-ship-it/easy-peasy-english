import { useSyncExternalStore } from 'react';

// Must match the inline script in index.html that applies the theme before first paint.
const STORAGE_KEY = 'epe-theme';
const META_COLORS = { light: '#FFF9EC', dark: '#1A1C2C' };

const listeners = new Set();
const root = document.documentElement;

function readTheme() {
  return root.classList.contains('dark') ? 'dark' : 'light';
}

function applyTheme(theme, { animate = false } = {}) {
  if (animate) {
    // Briefly enable colour transitions on every element so the switch is smooth,
    // without slowing down regular hover/transform transitions afterwards.
    root.classList.add('theme-transition');
    window.clearTimeout(applyTheme.timer);
    applyTheme.timer = window.setTimeout(() => root.classList.remove('theme-transition'), 450);
  }
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLORS[theme]);
  listeners.forEach((l) => l());
}

export function setTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage unavailable — theme still applies for this page view */
  }
  applyTheme(theme, { animate: true });
}

export function toggleTheme() {
  setTheme(readTheme() === 'dark' ? 'light' : 'dark');
}

// Keep tabs in sync: switching theme in one tab updates the others.
window.addEventListener('storage', (e) => {
  if (e.key === STORAGE_KEY && (e.newValue === 'light' || e.newValue === 'dark')) {
    applyTheme(e.newValue);
  }
});

// Follow the OS setting until the user picks a theme explicitly.
window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener?.('change', (e) => {
  let saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
  if (!saved) applyTheme(e.matches ? 'dark' : 'light', { animate: true });
});

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useTheme() {
  return useSyncExternalStore(subscribe, readTheme);
}
