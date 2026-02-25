import { SvelteComponent } from 'svelte';

export interface ArrowCircle4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCircle4 extends SvelteComponent<ArrowCircle4Props> {}
