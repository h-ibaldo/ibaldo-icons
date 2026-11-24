import { SvelteComponent } from 'svelte';

export interface ChartTrendUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartTrendUp extends SvelteComponent<ChartTrendUpProps> {}
