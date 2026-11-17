import { SvelteComponent } from 'svelte';

export interface ClockCounterclockwiseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockCounterclockwise extends SvelteComponent<ClockCounterclockwiseProps> {}
