import { SvelteComponent } from 'svelte';

export interface BatteryAlertBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryAlertBoxy extends SvelteComponent<BatteryAlertBoxyProps> {}
