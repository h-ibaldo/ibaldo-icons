import { SvelteComponent } from 'svelte';

export interface SkipBackDoubleSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipBackDoubleSquare extends SvelteComponent<SkipBackDoubleSquareProps> {}
