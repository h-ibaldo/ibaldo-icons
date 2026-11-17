import { SvelteComponent } from 'svelte';

export interface AirplayWifiProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AirplayWifi extends SvelteComponent<AirplayWifiProps> {}
