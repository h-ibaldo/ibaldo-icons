import { SvelteComponent } from 'svelte';

export interface BookBookmark3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmark3 extends SvelteComponent<BookBookmark3Props> {}
