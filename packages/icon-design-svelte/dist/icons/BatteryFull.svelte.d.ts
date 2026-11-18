import { SvelteComponent } from 'svelte';

export interface BatteryFullProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryFull extends SvelteComponent<BatteryFullProps> {}
