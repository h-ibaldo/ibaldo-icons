import { SvelteComponent } from 'svelte';

export interface SunGearBrightnessSettings2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunGearBrightnessSettings2 extends SvelteComponent<SunGearBrightnessSettings2Props> {}
