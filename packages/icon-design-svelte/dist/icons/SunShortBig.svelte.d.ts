import { SvelteComponent } from 'svelte';

export interface SunShortBigProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunShortBig extends SvelteComponent<SunShortBigProps> {}
