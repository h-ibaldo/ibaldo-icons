import { SvelteComponent } from 'svelte';

export interface BatteryBoltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryBolt extends SvelteComponent<BatteryBoltProps> {}
