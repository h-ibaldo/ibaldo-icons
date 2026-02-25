import { SvelteComponent } from 'svelte';

export interface ArrowCircle1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCircle1 extends SvelteComponent<ArrowCircle1Props> {}
