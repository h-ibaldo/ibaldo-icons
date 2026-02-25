import { SvelteComponent } from 'svelte';

export interface Bookmarks1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmarks1 extends SvelteComponent<Bookmarks1Props> {}
