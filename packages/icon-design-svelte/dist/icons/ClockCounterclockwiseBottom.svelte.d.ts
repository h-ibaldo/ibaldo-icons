import { SvelteComponent } from 'svelte';

export interface ClockCounterclockwiseBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockCounterclockwiseBottom extends SvelteComponent<ClockCounterclockwiseBottomProps> {}
