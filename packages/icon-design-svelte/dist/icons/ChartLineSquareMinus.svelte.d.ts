import { SvelteComponent } from 'svelte';

export interface ChartLineSquareMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquareMinus extends SvelteComponent<ChartLineSquareMinusProps> {}
