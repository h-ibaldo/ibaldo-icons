import { SvelteComponent } from 'svelte';

export interface ChartTrendUpCircleXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartTrendUpCircleX extends SvelteComponent<ChartTrendUpCircleXProps> {}
