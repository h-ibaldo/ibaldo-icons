import { SvelteComponent } from 'svelte';

export interface ArrowDownSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownSquare extends SvelteComponent<ArrowDownSquareProps> {}
