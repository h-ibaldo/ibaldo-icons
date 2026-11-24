import { SvelteComponent } from 'svelte';

export interface BellRingFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellRingFlat extends SvelteComponent<BellRingFlatProps> {}
