import { SvelteComponent } from 'svelte';

export interface ArrowsHexagon2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsHexagon2 extends SvelteComponent<ArrowsHexagon2Props> {}
