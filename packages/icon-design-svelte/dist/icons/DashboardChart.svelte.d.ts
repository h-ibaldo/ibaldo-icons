import { SvelteComponent } from 'svelte';

export interface DashboardChartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardChart extends SvelteComponent<DashboardChartProps> {}
