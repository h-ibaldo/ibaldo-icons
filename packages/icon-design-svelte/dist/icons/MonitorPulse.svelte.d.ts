import { SvelteComponent } from 'svelte';

export interface MonitorPulseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorPulse extends SvelteComponent<MonitorPulseProps> {}
