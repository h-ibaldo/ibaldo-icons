import { SvelteComponent } from 'svelte';

export interface BrowserWindowFastProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowFast extends SvelteComponent<BrowserWindowFastProps> {}
