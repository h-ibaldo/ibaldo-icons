import { SvelteComponent } from 'svelte';

export interface BookmarkLargeCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkLargeCheck extends SvelteComponent<BookmarkLargeCheckProps> {}
