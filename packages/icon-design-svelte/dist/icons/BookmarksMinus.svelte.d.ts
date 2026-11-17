import { SvelteComponent } from 'svelte';

export interface BookmarksMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarksMinus extends SvelteComponent<BookmarksMinusProps> {}
