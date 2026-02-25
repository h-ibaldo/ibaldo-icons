import { SvelteComponent } from 'svelte';

export interface SunBrightness6BProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness6B extends SvelteComponent<SunBrightness6BProps> {}
