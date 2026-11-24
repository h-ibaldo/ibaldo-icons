import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseOff extends SvelteComponent<ArrowClockwiseOffProps> {}
