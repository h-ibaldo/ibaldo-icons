import { SvelteComponent } from 'svelte';

export interface ChartLinePeakSquareXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeakSquareX extends SvelteComponent<ChartLinePeakSquareXProps> {}
