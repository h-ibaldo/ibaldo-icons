import { SvelteComponent } from 'svelte';

export interface ScrollTextNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScrollTextNarrow extends SvelteComponent<ScrollTextNarrowProps> {}
