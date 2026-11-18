import { SvelteComponent } from 'svelte';

export interface ClockDashedLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockDashedLong extends SvelteComponent<ClockDashedLongProps> {}
