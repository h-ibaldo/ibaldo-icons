import { SvelteComponent } from 'svelte';

export interface SunBrightness2CProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness2C extends SvelteComponent<SunBrightness2CProps> {}
