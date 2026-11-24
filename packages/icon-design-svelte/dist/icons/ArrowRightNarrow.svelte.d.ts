import { SvelteComponent } from 'svelte';

export interface ArrowRightNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightNarrow extends SvelteComponent<ArrowRightNarrowProps> {}
