import { SvelteComponent } from 'svelte';

export interface ArrowsClockwise2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsClockwise2 extends SvelteComponent<ArrowsClockwise2Props> {}
