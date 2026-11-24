import { SvelteComponent } from 'svelte';

export interface ChartLineSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare extends SvelteComponent<ChartLineSquareProps> {}
