import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseBottomSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseBottomSquare extends SvelteComponent<ArrowCounterclockwiseBottomSquareProps> {}
