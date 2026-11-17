import { SvelteComponent } from 'svelte';

export interface GridOddSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GridOddSquare extends SvelteComponent<GridOddSquareProps> {}
