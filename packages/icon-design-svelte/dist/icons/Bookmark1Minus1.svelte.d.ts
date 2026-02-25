import { SvelteComponent } from 'svelte';

export interface Bookmark1Minus1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Minus1 extends SvelteComponent<Bookmark1Minus1Props> {}
