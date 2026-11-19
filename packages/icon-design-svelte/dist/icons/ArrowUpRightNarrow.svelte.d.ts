import { SvelteComponent } from 'svelte';

export interface ArrowUpRightNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpRightNarrow extends SvelteComponent<ArrowUpRightNarrowProps> {}
