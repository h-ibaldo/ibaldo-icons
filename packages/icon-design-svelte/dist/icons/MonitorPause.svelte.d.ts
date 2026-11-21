import { SvelteComponent } from 'svelte';

export interface MonitorPauseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorPause extends SvelteComponent<MonitorPauseProps> {}
