import { SvelteComponent } from 'svelte';

export interface SunMixedLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunMixedLarge extends SvelteComponent<SunMixedLargeProps> {}
