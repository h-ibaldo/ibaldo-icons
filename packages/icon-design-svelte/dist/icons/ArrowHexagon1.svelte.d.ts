import { SvelteComponent } from 'svelte';

export interface ArrowHexagon1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowHexagon1 extends SvelteComponent<ArrowHexagon1Props> {}
