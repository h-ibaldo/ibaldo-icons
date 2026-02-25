import { SvelteComponent } from 'svelte';

export interface ArrowsClockwise3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsClockwise3 extends SvelteComponent<ArrowsClockwise3Props> {}
