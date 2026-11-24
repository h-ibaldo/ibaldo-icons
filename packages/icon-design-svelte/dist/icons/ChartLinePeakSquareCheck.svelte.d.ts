import { SvelteComponent } from 'svelte';

export interface ChartLinePeakSquareCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeakSquareCheck extends SvelteComponent<ChartLinePeakSquareCheckProps> {}
