import { SvelteComponent } from 'svelte';

export interface SunBrightness7CProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness7C extends SvelteComponent<SunBrightness7CProps> {}
