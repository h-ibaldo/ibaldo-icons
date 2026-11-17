import { SvelteComponent } from 'svelte';

export interface BookmarkStackCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStackCheck extends SvelteComponent<BookmarkStackCheckProps> {}
