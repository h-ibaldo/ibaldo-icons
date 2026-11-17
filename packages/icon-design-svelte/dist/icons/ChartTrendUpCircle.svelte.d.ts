import { SvelteComponent } from 'svelte';

export interface ChartTrendUpCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartTrendUpCircle extends SvelteComponent<ChartTrendUpCircleProps> {}
