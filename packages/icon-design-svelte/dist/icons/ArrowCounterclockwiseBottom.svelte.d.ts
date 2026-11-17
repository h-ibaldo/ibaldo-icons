import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseBottom extends SvelteComponent<ArrowCounterclockwiseBottomProps> {}
