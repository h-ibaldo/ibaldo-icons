import { SvelteComponent } from 'svelte';

export interface BrowserFilmProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserFilm extends SvelteComponent<BrowserFilmProps> {}
