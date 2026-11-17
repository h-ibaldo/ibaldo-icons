import { SvelteComponent } from 'svelte';

export interface BookmarkSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkSquare extends SvelteComponent<BookmarkSquareProps> {}
