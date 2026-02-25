import { SvelteComponent } from 'svelte';

export interface SunBrightness12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness12 extends SvelteComponent<SunBrightness12Props> {}
