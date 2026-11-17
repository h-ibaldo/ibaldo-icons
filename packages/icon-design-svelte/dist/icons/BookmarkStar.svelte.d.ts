import { SvelteComponent } from 'svelte';

export interface BookmarkStarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStar extends SvelteComponent<BookmarkStarProps> {}
