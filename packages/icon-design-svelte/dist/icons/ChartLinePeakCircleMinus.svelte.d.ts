import { SvelteComponent } from 'svelte';

export interface ChartLinePeakCircleMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeakCircleMinus extends SvelteComponent<ChartLinePeakCircleMinusProps> {}
