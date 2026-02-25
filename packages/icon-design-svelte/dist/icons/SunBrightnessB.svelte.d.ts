import { SvelteComponent } from 'svelte';

export interface SunBrightnessBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightnessB extends SvelteComponent<SunBrightnessBProps> {}
