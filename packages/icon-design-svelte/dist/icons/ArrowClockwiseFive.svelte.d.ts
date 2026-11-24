import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseFiveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseFive extends SvelteComponent<ArrowClockwiseFiveProps> {}
