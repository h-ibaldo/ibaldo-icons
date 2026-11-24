import { SvelteComponent } from 'svelte';

export interface MonitorCodeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorCode extends SvelteComponent<MonitorCodeProps> {}
