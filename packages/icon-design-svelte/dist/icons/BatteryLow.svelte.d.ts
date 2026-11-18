import { SvelteComponent } from 'svelte';

export interface BatteryLowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryLow extends SvelteComponent<BatteryLowProps> {}
