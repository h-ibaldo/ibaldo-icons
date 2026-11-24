import { SvelteComponent } from 'svelte';

export interface ChartLinePeakSquareMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeakSquareMinus extends SvelteComponent<ChartLinePeakSquareMinusProps> {}
