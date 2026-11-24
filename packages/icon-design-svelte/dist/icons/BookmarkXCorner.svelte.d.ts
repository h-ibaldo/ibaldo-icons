import { SvelteComponent } from 'svelte';

export interface BookmarkXCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkXCorner extends SvelteComponent<BookmarkXCornerProps> {}
