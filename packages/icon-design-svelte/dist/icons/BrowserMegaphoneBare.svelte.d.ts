import { SvelteComponent } from 'svelte';

export interface BrowserMegaphoneBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserMegaphoneBare extends SvelteComponent<BrowserMegaphoneBareProps> {}
