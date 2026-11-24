import { SvelteComponent } from 'svelte';

export interface ChartTrendUpSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartTrendUpSquare extends SvelteComponent<ChartTrendUpSquareProps> {}
