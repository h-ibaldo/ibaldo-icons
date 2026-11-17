import { SvelteComponent } from 'svelte';

export interface BrowserSunBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserSunBare extends SvelteComponent<BrowserSunBareProps> {}
