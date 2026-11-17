import { SvelteComponent } from 'svelte';

export interface BrowserChartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserChart extends SvelteComponent<BrowserChartProps> {}
