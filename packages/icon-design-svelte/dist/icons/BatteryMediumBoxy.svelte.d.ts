import { SvelteComponent } from 'svelte';

export interface BatteryMediumBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryMediumBoxy extends SvelteComponent<BatteryMediumBoxyProps> {}
