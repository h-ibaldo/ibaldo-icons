import { SvelteComponent } from 'svelte';

export interface BookBookmark4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmark4 extends SvelteComponent<BookBookmark4Props> {}
