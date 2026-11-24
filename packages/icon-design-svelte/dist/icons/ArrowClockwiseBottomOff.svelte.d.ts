import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseBottomOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseBottomOff extends SvelteComponent<ArrowClockwiseBottomOffProps> {}
