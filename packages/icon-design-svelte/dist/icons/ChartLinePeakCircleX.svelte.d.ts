import { SvelteComponent } from 'svelte';

export interface ChartLinePeakCircleXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeakCircleX extends SvelteComponent<ChartLinePeakCircleXProps> {}
