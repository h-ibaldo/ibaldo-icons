import { SvelteComponent } from 'svelte';

export interface ScrollTextProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScrollText extends SvelteComponent<ScrollTextProps> {}
