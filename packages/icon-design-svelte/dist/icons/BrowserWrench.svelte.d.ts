import { SvelteComponent } from 'svelte';

export interface BrowserWrenchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWrench extends SvelteComponent<BrowserWrenchProps> {}
