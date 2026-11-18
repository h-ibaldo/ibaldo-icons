import { SvelteComponent } from 'svelte';

export interface ArrowDownNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownNarrow extends SvelteComponent<ArrowDownNarrowProps> {}
