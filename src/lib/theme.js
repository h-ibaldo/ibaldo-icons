// Light / dark theme. The class on <html> is set before first paint by the
// inline script in app.html (saved choice, else the system preference);
// this store mirrors it and toggles it.
import { writable } from 'svelte/store';

const initial =
  typeof document !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light';

export const theme = writable(initial);

export function setTheme(value) {
  theme.set(value);
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', value === 'dark');
  try {
    localStorage.setItem('theme', value);
  } catch {
    // private mode / storage blocked: the choice just won't persist
  }
}

export function toggleTheme() {
  let current;
  theme.subscribe((v) => (current = v))();
  setTheme(current === 'dark' ? 'light' : 'dark');
}
