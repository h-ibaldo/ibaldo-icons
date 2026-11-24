import { SvelteComponent } from 'svelte';

export interface SunMoonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunMoon extends SvelteComponent<SunMoonProps> {}
