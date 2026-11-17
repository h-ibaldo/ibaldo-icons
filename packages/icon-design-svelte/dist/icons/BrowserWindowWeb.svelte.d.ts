import { SvelteComponent } from 'svelte';

export interface BrowserWindowWebProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowWeb extends SvelteComponent<BrowserWindowWebProps> {}
