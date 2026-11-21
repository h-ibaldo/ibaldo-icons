import { SvelteComponent } from 'svelte';

export interface MonitorXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorX extends SvelteComponent<MonitorXProps> {}
