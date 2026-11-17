import { SvelteComponent } from 'svelte';

export interface SunBigProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBig extends SvelteComponent<SunBigProps> {}
