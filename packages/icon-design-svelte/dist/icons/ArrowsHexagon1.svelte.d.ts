import { SvelteComponent } from 'svelte';

export interface ArrowsHexagon1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsHexagon1 extends SvelteComponent<ArrowsHexagon1Props> {}
