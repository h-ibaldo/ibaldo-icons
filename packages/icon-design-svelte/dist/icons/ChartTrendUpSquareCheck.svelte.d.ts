import { SvelteComponent } from 'svelte';

export interface ChartTrendUpSquareCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartTrendUpSquareCheck extends SvelteComponent<ChartTrendUpSquareCheckProps> {}
