import { SvelteComponent } from 'svelte';

export interface BatteryPlugBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryPlugBoxy extends SvelteComponent<BatteryPlugBoxyProps> {}
