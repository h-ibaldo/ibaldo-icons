import { SvelteComponent } from 'svelte';

export interface MonitorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Monitor extends SvelteComponent<MonitorProps> {}
