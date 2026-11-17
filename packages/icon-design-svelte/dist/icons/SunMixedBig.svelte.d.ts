import { SvelteComponent } from 'svelte';

export interface SunMixedBigProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunMixedBig extends SvelteComponent<SunMixedBigProps> {}
