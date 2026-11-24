import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseFiveChevronProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseFiveChevron extends SvelteComponent<ArrowClockwiseFiveChevronProps> {}
