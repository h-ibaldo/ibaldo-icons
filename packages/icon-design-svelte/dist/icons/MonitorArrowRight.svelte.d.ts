import { SvelteComponent } from 'svelte';

export interface MonitorArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorArrowRight extends SvelteComponent<MonitorArrowRightProps> {}
