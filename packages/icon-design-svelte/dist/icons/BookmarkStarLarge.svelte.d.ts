import { SvelteComponent } from 'svelte';

export interface BookmarkStarLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStarLarge extends SvelteComponent<BookmarkStarLargeProps> {}
