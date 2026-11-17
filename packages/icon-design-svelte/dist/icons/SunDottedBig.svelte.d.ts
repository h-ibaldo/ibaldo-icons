import { SvelteComponent } from 'svelte';

export interface SunDottedBigProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunDottedBig extends SvelteComponent<SunDottedBigProps> {}
