import { SvelteComponent } from 'svelte';

export interface ArrowDownLeftNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownLeftNarrow extends SvelteComponent<ArrowDownLeftNarrowProps> {}
