import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseCheckChevronProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseCheckChevron extends SvelteComponent<ArrowCounterclockwiseCheckChevronProps> {}
