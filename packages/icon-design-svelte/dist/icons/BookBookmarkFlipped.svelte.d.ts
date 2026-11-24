import { SvelteComponent } from 'svelte';

export interface BookBookmarkFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmarkFlipped extends SvelteComponent<BookBookmarkFlippedProps> {}
