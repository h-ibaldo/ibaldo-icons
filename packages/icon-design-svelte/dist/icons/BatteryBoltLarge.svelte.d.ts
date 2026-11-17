import { SvelteComponent } from 'svelte';

export interface BatteryBoltLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryBoltLarge extends SvelteComponent<BatteryBoltLargeProps> {}
