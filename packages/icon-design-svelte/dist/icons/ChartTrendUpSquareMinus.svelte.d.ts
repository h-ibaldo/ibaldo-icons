import { SvelteComponent } from 'svelte';

export interface ChartTrendUpSquareMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartTrendUpSquareMinus extends SvelteComponent<ChartTrendUpSquareMinusProps> {}
