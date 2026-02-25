import { SvelteComponent } from 'svelte';

export interface ArrowsCounterClockwise1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsCounterClockwise1 extends SvelteComponent<ArrowsCounterClockwise1Props> {}
