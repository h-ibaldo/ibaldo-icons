import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseSquare extends SvelteComponent<ArrowCounterclockwiseSquareProps> {}
