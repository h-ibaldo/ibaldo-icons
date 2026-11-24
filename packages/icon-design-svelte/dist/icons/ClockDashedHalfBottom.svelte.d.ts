import { SvelteComponent } from 'svelte';

export interface ClockDashedHalfBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockDashedHalfBottom extends SvelteComponent<ClockDashedHalfBottomProps> {}
