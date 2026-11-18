import { SvelteComponent } from 'svelte';

export interface DashboardPieSliderBarsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardPieSliderBars extends SvelteComponent<DashboardPieSliderBarsProps> {}
