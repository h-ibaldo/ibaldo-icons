import { SvelteComponent } from 'svelte';

export interface SunBrightness4DProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness4D extends SvelteComponent<SunBrightness4DProps> {}
