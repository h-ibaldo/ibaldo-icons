import { SvelteComponent } from 'svelte';

export interface WebsitePortalChartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalChart extends SvelteComponent<WebsitePortalChartProps> {}
