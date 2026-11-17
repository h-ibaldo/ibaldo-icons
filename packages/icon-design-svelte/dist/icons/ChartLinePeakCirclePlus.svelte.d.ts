import { SvelteComponent } from 'svelte';

export interface ChartLinePeakCirclePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeakCirclePlus extends SvelteComponent<ChartLinePeakCirclePlusProps> {}
