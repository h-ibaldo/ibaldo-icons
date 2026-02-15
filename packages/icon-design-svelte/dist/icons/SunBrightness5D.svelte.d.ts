import { SvelteComponent } from 'svelte';

export interface SunBrightness5DProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness5D extends SvelteComponent<SunBrightness5DProps> {}
