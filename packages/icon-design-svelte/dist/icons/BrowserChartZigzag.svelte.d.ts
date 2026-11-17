import { SvelteComponent } from 'svelte';

export interface BrowserChartZigzagProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserChartZigzag extends SvelteComponent<BrowserChartZigzagProps> {}
