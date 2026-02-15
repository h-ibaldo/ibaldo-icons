import { SvelteComponent } from 'svelte';

export interface Bookmarks2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmarks2 extends SvelteComponent<Bookmarks2Props> {}
