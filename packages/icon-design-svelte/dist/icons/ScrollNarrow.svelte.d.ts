import { SvelteComponent } from 'svelte';

export interface ScrollNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScrollNarrow extends SvelteComponent<ScrollNarrowProps> {}
