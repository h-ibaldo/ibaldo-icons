import { SvelteComponent } from 'svelte';

export interface BellDotRimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellDotRim extends SvelteComponent<BellDotRimProps> {}
