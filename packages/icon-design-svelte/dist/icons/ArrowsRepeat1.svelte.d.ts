import { SvelteComponent } from 'svelte';

export interface ArrowsRepeat1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsRepeat1 extends SvelteComponent<ArrowsRepeat1Props> {}
