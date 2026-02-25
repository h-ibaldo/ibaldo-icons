import { SvelteComponent } from 'svelte';

export interface BookOpenBookmarkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenBookmark extends SvelteComponent<BookOpenBookmarkProps> {}
