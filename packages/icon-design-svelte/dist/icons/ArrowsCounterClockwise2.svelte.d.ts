import { SvelteComponent } from 'svelte';

export interface ArrowsCounterClockwise2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsCounterClockwise2 extends SvelteComponent<ArrowsCounterClockwise2Props> {}
