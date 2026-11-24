import { SvelteComponent } from 'svelte';

export interface ChartLinePeakCircleArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeakCircleArrowRight extends SvelteComponent<ChartLinePeakCircleArrowRightProps> {}
