import { SvelteComponent } from 'svelte';

export interface ChartLinePeakSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeakSquare extends SvelteComponent<ChartLinePeakSquareProps> {}
