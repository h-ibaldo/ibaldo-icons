import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsLinesSquareCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsLinesSquareCheck extends SvelteComponent<ChartVerticalColumnsLinesSquareCheckProps> {}
