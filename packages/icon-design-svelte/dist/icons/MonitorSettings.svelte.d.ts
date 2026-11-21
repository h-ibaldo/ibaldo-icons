import { SvelteComponent } from 'svelte';

export interface MonitorSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorSettings extends SvelteComponent<MonitorSettingsProps> {}
