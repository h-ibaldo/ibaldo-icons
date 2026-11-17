import { SvelteComponent } from 'svelte';

export interface BellRingRimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellRingRim extends SvelteComponent<BellRingRimProps> {}
