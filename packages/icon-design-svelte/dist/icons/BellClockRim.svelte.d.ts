import { SvelteComponent } from 'svelte';

export interface BellClockRimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellClockRim extends SvelteComponent<BellClockRimProps> {}
