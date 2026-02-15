import { SvelteComponent } from 'svelte';

export interface ArrowsCounterClockwise3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsCounterClockwise3 extends SvelteComponent<ArrowsCounterClockwise3Props> {}
