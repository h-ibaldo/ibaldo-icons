import { SvelteComponent } from 'svelte';

export interface SunBrightness1BProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness1B extends SvelteComponent<SunBrightness1BProps> {}
