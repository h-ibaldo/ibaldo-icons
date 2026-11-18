import { SvelteComponent } from 'svelte';

export interface BatteryEmptyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryEmpty extends SvelteComponent<BatteryEmptyProps> {}
