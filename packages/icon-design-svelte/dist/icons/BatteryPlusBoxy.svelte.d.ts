import { SvelteComponent } from 'svelte';

export interface BatteryPlusBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryPlusBoxy extends SvelteComponent<BatteryPlusBoxyProps> {}
