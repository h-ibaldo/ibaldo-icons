import { SvelteComponent } from 'svelte';

export interface BookmarksXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarksX extends SvelteComponent<BookmarksXProps> {}
