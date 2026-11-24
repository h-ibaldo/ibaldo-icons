import { SvelteComponent } from 'svelte';

export interface MonitorStopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorStop extends SvelteComponent<MonitorStopProps> {}
