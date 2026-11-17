import { SvelteComponent } from 'svelte';

export interface DashboardSlidersPieTrendProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardSlidersPieTrend extends SvelteComponent<DashboardSlidersPieTrendProps> {}
