import { SvelteComponent } from 'svelte';

export interface BellOffRimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellOffRim extends SvelteComponent<BellOffRimProps> {}
