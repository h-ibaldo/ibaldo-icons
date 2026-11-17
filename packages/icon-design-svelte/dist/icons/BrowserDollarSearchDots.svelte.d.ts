import { SvelteComponent } from 'svelte';

export interface BrowserDollarSearchDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserDollarSearchDots extends SvelteComponent<BrowserDollarSearchDotsProps> {}
