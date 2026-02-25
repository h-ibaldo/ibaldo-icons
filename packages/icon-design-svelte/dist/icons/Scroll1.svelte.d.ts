import { SvelteComponent } from 'svelte';

export interface Scroll1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Scroll1 extends SvelteComponent<Scroll1Props> {}
