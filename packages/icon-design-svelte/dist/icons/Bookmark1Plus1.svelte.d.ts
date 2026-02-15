import { SvelteComponent } from 'svelte';

export interface Bookmark1Plus1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Plus1 extends SvelteComponent<Bookmark1Plus1Props> {}
