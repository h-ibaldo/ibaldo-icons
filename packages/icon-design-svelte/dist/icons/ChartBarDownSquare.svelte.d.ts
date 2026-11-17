import { SvelteComponent } from 'svelte';

export interface ChartBarDownSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarDownSquare extends SvelteComponent<ChartBarDownSquareProps> {}
