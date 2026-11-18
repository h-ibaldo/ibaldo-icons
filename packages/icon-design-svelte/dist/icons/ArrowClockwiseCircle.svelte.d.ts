import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseCircle extends SvelteComponent<ArrowClockwiseCircleProps> {}
