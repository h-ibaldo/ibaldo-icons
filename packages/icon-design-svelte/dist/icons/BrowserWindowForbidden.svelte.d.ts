import { SvelteComponent } from 'svelte';

export interface BrowserWindowForbiddenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowForbidden extends SvelteComponent<BrowserWindowForbiddenProps> {}
