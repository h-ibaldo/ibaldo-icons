import { SvelteComponent } from 'svelte';

export interface ArrowUpSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpSquare extends SvelteComponent<ArrowUpSquareProps> {}
