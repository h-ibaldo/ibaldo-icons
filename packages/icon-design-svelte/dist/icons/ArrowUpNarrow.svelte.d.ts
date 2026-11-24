import { SvelteComponent } from 'svelte';

export interface ArrowUpNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpNarrow extends SvelteComponent<ArrowUpNarrowProps> {}
