import { SvelteComponent } from 'svelte';

export interface MonitorPulseStandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorPulseStand extends SvelteComponent<MonitorPulseStandProps> {}
