import { SvelteComponent } from 'svelte';

export interface BatteryFullBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryFullBoxy extends SvelteComponent<BatteryFullBoxyProps> {}
