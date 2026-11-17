import { SvelteComponent } from 'svelte';

export interface BrowserCompassProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserCompass extends SvelteComponent<BrowserCompassProps> {}
