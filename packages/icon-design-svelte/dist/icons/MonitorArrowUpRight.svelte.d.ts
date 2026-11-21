import { SvelteComponent } from 'svelte';

export interface MonitorArrowUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorArrowUpRight extends SvelteComponent<MonitorArrowUpRightProps> {}
