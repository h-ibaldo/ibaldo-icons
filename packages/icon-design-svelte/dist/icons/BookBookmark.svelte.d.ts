import { SvelteComponent } from 'svelte';

export interface BookBookmarkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmark extends SvelteComponent<BookBookmarkProps> {}
