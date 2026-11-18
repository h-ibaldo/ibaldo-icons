import { SvelteComponent } from 'svelte';

export interface ArrowClockwiseTenChevronProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowClockwiseTenChevron extends SvelteComponent<ArrowClockwiseTenChevronProps> {}
