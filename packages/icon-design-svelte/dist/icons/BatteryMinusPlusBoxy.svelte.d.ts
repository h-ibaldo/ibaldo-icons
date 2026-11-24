import { SvelteComponent } from 'svelte';

export interface BatteryMinusPlusBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryMinusPlusBoxy extends SvelteComponent<BatteryMinusPlusBoxyProps> {}
