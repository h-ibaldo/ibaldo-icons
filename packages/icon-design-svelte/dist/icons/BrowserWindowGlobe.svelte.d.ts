import { SvelteComponent } from 'svelte';

export interface BrowserWindowGlobeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowGlobe extends SvelteComponent<BrowserWindowGlobeProps> {}
