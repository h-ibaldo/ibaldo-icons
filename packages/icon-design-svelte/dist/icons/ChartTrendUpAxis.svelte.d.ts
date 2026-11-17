import { SvelteComponent } from 'svelte';

export interface ChartTrendUpAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartTrendUpAxis extends SvelteComponent<ChartTrendUpAxisProps> {}
