import { SvelteComponent } from 'svelte';

export interface ChartLinePeakSquareArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLinePeakSquareArrowRight extends SvelteComponent<ChartLinePeakSquareArrowRightProps> {}
