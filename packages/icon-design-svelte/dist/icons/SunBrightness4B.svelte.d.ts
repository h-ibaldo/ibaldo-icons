import { SvelteComponent } from 'svelte';

export interface SunBrightness4BProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness4B extends SvelteComponent<SunBrightness4BProps> {}
