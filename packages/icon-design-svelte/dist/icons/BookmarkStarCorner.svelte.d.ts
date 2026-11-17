import { SvelteComponent } from 'svelte';

export interface BookmarkStarCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStarCorner extends SvelteComponent<BookmarkStarCornerProps> {}
