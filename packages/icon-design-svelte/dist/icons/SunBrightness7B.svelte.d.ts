import { SvelteComponent } from 'svelte';

export interface SunBrightness7BProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness7B extends SvelteComponent<SunBrightness7BProps> {}
