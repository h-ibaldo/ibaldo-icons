import { SvelteComponent } from 'svelte';

export interface SunBrightness3BProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness3B extends SvelteComponent<SunBrightness3BProps> {}
