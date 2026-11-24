import { SvelteComponent } from 'svelte';

export interface MonitorVolumeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorVolume extends SvelteComponent<MonitorVolumeProps> {}
