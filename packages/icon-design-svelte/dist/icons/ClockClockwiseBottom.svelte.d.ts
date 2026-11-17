import { SvelteComponent } from 'svelte';

export interface ClockClockwiseBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockClockwiseBottom extends SvelteComponent<ClockClockwiseBottomProps> {}
