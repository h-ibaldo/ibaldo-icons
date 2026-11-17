import { SvelteComponent } from 'svelte';

export interface BrowserChartArrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserChartArrow extends SvelteComponent<BrowserChartArrowProps> {}
