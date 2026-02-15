import { SvelteComponent } from 'svelte';

export interface Bookmark1X1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1X1 extends SvelteComponent<Bookmark1X1Props> {}
