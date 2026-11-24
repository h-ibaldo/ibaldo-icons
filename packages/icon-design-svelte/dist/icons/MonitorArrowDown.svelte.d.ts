import { SvelteComponent } from 'svelte';

export interface MonitorArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorArrowDown extends SvelteComponent<MonitorArrowDownProps> {}
