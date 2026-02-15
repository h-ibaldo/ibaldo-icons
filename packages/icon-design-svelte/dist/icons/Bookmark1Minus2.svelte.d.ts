import { SvelteComponent } from 'svelte';

export interface Bookmark1Minus2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Minus2 extends SvelteComponent<Bookmark1Minus2Props> {}
