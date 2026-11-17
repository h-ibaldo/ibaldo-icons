import { SvelteComponent } from 'svelte';

export interface BrowserArrowUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserArrowUpRight extends SvelteComponent<BrowserArrowUpRightProps> {}
