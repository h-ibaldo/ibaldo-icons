import { SvelteComponent } from 'svelte';

export interface SunBrightness4CProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness4C extends SvelteComponent<SunBrightness4CProps> {}
