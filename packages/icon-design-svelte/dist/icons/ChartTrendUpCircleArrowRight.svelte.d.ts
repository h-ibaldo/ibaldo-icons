import { SvelteComponent } from 'svelte';

export interface ChartTrendUpCircleArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartTrendUpCircleArrowRight extends SvelteComponent<ChartTrendUpCircleArrowRightProps> {}
