import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseCheckCircle extends SvelteComponent<ArrowClockwiseCheckCircleProps> {}
