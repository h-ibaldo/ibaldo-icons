import { SvelteComponent } from 'svelte';

export interface SunMixedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunMixed extends SvelteComponent<SunMixedProps> {}
