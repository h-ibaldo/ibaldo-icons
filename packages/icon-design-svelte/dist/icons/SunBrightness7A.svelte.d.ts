import { SvelteComponent } from 'svelte';

export interface SunBrightness7AProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness7A extends SvelteComponent<SunBrightness7AProps> {}
