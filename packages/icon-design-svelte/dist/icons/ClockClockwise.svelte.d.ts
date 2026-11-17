import { SvelteComponent } from 'svelte';

export interface ClockClockwiseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockClockwise extends SvelteComponent<ClockClockwiseProps> {}
