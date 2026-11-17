import { SvelteComponent } from 'svelte';

export interface BookmarkCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCheck extends SvelteComponent<BookmarkCheckProps> {}
