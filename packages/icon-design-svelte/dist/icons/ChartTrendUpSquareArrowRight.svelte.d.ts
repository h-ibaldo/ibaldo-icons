import { SvelteComponent } from 'svelte';

export interface ChartTrendUpSquareArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartTrendUpSquareArrowRight extends SvelteComponent<ChartTrendUpSquareArrowRightProps> {}
