import { SvelteComponent } from 'svelte';

export interface SunBrightness5BProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness5B extends SvelteComponent<SunBrightness5BProps> {}
