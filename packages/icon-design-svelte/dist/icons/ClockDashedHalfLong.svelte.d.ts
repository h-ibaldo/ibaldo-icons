import { SvelteComponent } from 'svelte';

export interface ClockDashedHalfLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockDashedHalfLong extends SvelteComponent<ClockDashedHalfLongProps> {}
