import { SvelteComponent } from 'svelte';

export interface MonitorXCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorXCorner extends SvelteComponent<MonitorXCornerProps> {}
