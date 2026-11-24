import { SvelteComponent } from 'svelte';

export interface BrowserHeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserHeart extends SvelteComponent<BrowserHeartProps> {}
