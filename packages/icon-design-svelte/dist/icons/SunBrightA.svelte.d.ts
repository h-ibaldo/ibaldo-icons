import { SvelteComponent } from 'svelte';

export interface SunBrightAProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightA extends SvelteComponent<SunBrightAProps> {}
