import { SvelteComponent } from 'svelte';

export interface SunBrightness3AProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness3A extends SvelteComponent<SunBrightness3AProps> {}
