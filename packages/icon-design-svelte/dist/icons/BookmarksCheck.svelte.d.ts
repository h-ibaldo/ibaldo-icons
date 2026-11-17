import { SvelteComponent } from 'svelte';

export interface BookmarksCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarksCheck extends SvelteComponent<BookmarksCheckProps> {}
