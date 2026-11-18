import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseSquare extends SvelteComponent<ArrowClockwiseSquareProps> {}
