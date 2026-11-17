import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseFiveChevronProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseFiveChevron extends SvelteComponent<ArrowCounterclockwiseFiveChevronProps> {}
