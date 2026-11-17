import { SvelteComponent } from 'svelte';

export interface BookmarksPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarksPlus extends SvelteComponent<BookmarksPlusProps> {}
