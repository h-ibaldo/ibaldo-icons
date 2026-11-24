import { SvelteComponent } from 'svelte';

export interface ClockDashedHalfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockDashedHalf extends SvelteComponent<ClockDashedHalfProps> {}
