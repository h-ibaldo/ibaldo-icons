import { SvelteComponent } from 'svelte';

export interface MonitorOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorOff extends SvelteComponent<MonitorOffProps> {}
