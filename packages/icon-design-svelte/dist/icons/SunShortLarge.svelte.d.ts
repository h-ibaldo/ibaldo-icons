import { SvelteComponent } from 'svelte';

export interface SunShortLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunShortLarge extends SvelteComponent<SunShortLargeProps> {}
