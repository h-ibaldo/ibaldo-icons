import { SvelteComponent } from 'svelte';

export interface ArrowUpRightSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpRightSquare extends SvelteComponent<ArrowUpRightSquareProps> {}
