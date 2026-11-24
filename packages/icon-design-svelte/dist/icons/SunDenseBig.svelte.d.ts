import { SvelteComponent } from 'svelte';

export interface SunDenseBigProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunDenseBig extends SvelteComponent<SunDenseBigProps> {}
