import { SvelteComponent } from 'svelte';

export interface BatteryLowBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryLowBoxy extends SvelteComponent<BatteryLowBoxyProps> {}
