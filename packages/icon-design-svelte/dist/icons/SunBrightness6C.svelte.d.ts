import { SvelteComponent } from 'svelte';

export interface SunBrightness6CProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness6C extends SvelteComponent<SunBrightness6CProps> {}
