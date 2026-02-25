import { SvelteComponent } from 'svelte';

export interface SunBrightness2BProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness2B extends SvelteComponent<SunBrightness2BProps> {}
