import { SvelteComponent } from 'svelte';

export interface BrowserSlidersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserSliders extends SvelteComponent<BrowserSlidersProps> {}
