import { SvelteComponent } from 'svelte';

export interface ArrowDownRightNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownRightNarrow extends SvelteComponent<ArrowDownRightNarrowProps> {}
