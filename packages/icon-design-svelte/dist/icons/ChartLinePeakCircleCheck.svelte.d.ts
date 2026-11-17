import { SvelteComponent } from 'svelte';

export interface ChartLinePeakCircleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeakCircleCheck extends SvelteComponent<ChartLinePeakCircleCheckProps> {}
