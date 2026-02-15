import { SvelteComponent } from 'svelte';

export interface BookBookmark1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmark1 extends SvelteComponent<BookBookmark1Props> {}
