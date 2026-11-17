import { SvelteComponent } from 'svelte';

export interface BellTiltedRimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellTiltedRim extends SvelteComponent<BellTiltedRimProps> {}
