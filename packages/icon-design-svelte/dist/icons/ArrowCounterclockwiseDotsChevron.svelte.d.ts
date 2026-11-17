import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseDotsChevronProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseDotsChevron extends SvelteComponent<ArrowCounterclockwiseDotsChevronProps> {}
