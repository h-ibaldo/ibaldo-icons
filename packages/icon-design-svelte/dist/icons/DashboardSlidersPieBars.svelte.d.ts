import { SvelteComponent } from 'svelte';

export interface DashboardSlidersPieBarsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardSlidersPieBars extends SvelteComponent<DashboardSlidersPieBarsProps> {}
