import { SvelteComponent } from 'svelte';

export interface SunBrightnessDProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightnessD extends SvelteComponent<SunBrightnessDProps> {}
