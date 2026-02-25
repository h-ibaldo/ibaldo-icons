import { SvelteComponent } from 'svelte';

export interface Bookmarks2XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmarks2X extends SvelteComponent<Bookmarks2XProps> {}
