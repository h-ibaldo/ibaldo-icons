import { SvelteComponent } from 'svelte';

export interface SunBrightness5AProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness5A extends SvelteComponent<SunBrightness5AProps> {}
