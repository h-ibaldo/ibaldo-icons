import { SvelteComponent } from 'svelte';

export interface Bookmark1Page1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Page1 extends SvelteComponent<Bookmark1Page1Props> {}
