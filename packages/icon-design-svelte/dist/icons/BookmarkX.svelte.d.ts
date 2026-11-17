import { SvelteComponent } from 'svelte';

export interface BookmarkXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkX extends SvelteComponent<BookmarkXProps> {}
