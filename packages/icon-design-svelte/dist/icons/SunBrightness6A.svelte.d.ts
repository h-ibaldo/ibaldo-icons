import { SvelteComponent } from 'svelte';

export interface SunBrightness6AProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness6A extends SvelteComponent<SunBrightness6AProps> {}
