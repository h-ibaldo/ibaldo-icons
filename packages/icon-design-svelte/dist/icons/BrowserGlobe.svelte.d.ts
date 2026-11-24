import { SvelteComponent } from 'svelte';

export interface BrowserGlobeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserGlobe extends SvelteComponent<BrowserGlobeProps> {}
