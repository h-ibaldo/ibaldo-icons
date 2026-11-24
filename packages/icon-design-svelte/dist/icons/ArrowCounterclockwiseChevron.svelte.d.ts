import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseChevronProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseChevron extends SvelteComponent<ArrowCounterclockwiseChevronProps> {}
