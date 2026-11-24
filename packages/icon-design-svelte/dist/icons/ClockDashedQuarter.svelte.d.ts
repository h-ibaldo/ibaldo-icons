import { SvelteComponent } from 'svelte';

export interface ClockDashedQuarterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockDashedQuarter extends SvelteComponent<ClockDashedQuarterProps> {}
