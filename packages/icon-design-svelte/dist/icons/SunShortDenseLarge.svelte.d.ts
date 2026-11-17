import { SvelteComponent } from 'svelte';

export interface SunShortDenseLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunShortDenseLarge extends SvelteComponent<SunShortDenseLargeProps> {}
