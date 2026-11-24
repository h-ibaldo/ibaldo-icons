import { SvelteComponent } from 'svelte';

export interface MonitorArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorArrowUp extends SvelteComponent<MonitorArrowUpProps> {}
