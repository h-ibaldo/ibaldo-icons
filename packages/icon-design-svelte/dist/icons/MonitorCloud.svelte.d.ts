import { SvelteComponent } from 'svelte';

export interface MonitorCloudProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorCloud extends SvelteComponent<MonitorCloudProps> {}
