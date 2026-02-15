import { SvelteComponent } from 'svelte';

export interface SunBrightness5CProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness5C extends SvelteComponent<SunBrightness5CProps> {}
