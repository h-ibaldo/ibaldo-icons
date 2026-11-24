import { SvelteComponent } from 'svelte';

export interface BellClockFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellClockFlat extends SvelteComponent<BellClockFlatProps> {}
