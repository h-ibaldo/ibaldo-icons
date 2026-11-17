import { SvelteComponent } from 'svelte';

export interface ChartTrendUpCircleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartTrendUpCircleCheck extends SvelteComponent<ChartTrendUpCircleCheckProps> {}
