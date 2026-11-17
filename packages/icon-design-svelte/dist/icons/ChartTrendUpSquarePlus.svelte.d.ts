import { SvelteComponent } from 'svelte';

export interface ChartTrendUpSquarePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartTrendUpSquarePlus extends SvelteComponent<ChartTrendUpSquarePlusProps> {}
