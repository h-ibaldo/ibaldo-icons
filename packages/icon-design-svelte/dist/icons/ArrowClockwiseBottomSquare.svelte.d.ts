import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseBottomSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseBottomSquare extends SvelteComponent<ArrowClockwiseBottomSquareProps> {}
