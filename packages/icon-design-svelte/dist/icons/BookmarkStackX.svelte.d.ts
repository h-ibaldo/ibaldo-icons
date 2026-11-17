import { SvelteComponent } from 'svelte';

export interface BookmarkStackXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStackX extends SvelteComponent<BookmarkStackXProps> {}
