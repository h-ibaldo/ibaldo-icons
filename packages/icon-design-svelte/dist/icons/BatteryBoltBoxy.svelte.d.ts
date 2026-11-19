import { SvelteComponent } from 'svelte';

export interface BatteryBoltBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryBoltBoxy extends SvelteComponent<BatteryBoltBoxyProps> {}
