import { SvelteComponent } from 'svelte';

export interface ChartLinePeakCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeakCircle extends SvelteComponent<ChartLinePeakCircleProps> {}
