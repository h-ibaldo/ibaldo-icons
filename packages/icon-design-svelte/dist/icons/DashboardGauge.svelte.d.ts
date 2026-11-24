import { SvelteComponent } from 'svelte';

export interface DashboardGaugeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardGauge extends SvelteComponent<DashboardGaugeProps> {}
