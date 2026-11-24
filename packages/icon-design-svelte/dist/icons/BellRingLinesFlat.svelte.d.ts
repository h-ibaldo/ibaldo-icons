import { SvelteComponent } from 'svelte';

export interface BellRingLinesFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellRingLinesFlat extends SvelteComponent<BellRingLinesFlatProps> {}
