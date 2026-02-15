import { SvelteComponent } from 'svelte';

export interface Bookmark1Plus2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Plus2 extends SvelteComponent<Bookmark1Plus2Props> {}
