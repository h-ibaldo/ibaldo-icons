import { SvelteComponent } from 'svelte';

export interface BrowserFastProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserFast extends SvelteComponent<BrowserFastProps> {}
