import { SvelteComponent } from 'svelte';

export interface Bookmarks1XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmarks1X extends SvelteComponent<Bookmarks1XProps> {}
