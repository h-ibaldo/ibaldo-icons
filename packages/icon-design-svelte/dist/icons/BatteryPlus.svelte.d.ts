import { SvelteComponent } from 'svelte';

export interface BatteryPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryPlus extends SvelteComponent<BatteryPlusProps> {}
