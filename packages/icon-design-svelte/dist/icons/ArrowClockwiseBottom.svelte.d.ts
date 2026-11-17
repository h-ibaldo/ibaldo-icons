import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseBottom extends SvelteComponent<ArrowClockwiseBottomProps> {}
