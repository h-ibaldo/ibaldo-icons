import { SvelteComponent } from 'svelte';

export interface DashboardPieListBarsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardPieListBars extends SvelteComponent<DashboardPieListBarsProps> {}
