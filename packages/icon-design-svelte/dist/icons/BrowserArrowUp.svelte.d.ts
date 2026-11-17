import { SvelteComponent } from 'svelte';

export interface BrowserArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserArrowUp extends SvelteComponent<BrowserArrowUpProps> {}
