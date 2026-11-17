import { SvelteComponent } from 'svelte';

export interface SunMixedHugeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunMixedHuge extends SvelteComponent<SunMixedHugeProps> {}
