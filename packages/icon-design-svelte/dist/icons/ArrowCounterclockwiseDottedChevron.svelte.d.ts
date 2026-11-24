import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwiseDottedChevronProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwiseDottedChevron extends SvelteComponent<ArrowCounterclockwiseDottedChevronProps> {}
