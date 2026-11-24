import { SvelteComponent } from 'svelte';

export interface ClockDashedQuarterRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockDashedQuarterRight extends SvelteComponent<ClockDashedQuarterRightProps> {}
