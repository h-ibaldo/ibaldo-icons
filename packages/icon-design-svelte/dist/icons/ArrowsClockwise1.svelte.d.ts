import { SvelteComponent } from 'svelte';

export interface ArrowsClockwise1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsClockwise1 extends SvelteComponent<ArrowsClockwise1Props> {}
