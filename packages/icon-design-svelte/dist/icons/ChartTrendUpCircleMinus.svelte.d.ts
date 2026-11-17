import { SvelteComponent } from 'svelte';

export interface ChartTrendUpCircleMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartTrendUpCircleMinus extends SvelteComponent<ChartTrendUpCircleMinusProps> {}
