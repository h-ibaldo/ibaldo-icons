import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseCheck extends SvelteComponent<ArrowClockwiseCheckProps> {}
