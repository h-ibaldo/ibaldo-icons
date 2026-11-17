import { SvelteComponent } from 'svelte';

export interface BellRingLinesRimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellRingLinesRim extends SvelteComponent<BellRingLinesRimProps> {}
