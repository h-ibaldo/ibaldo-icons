import { SvelteComponent } from 'svelte';

export interface BatteryHighProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryHigh extends SvelteComponent<BatteryHighProps> {}
