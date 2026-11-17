import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseCheckSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseCheckSquare extends SvelteComponent<ArrowClockwiseCheckSquareProps> {}
