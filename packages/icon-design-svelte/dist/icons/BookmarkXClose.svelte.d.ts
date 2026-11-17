import { SvelteComponent } from 'svelte';

export interface BookmarkXCloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkXClose extends SvelteComponent<BookmarkXCloseProps> {}
