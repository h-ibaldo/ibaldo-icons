import { SvelteComponent } from 'svelte';

export interface BatteryAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryAlert extends SvelteComponent<BatteryAlertProps> {}
