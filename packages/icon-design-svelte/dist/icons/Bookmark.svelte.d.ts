import { SvelteComponent } from 'svelte';

export interface BookmarkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark extends SvelteComponent<BookmarkProps> {}
