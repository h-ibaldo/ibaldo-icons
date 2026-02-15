import { SvelteComponent } from 'svelte';

export interface BookBookmark2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmark2 extends SvelteComponent<BookBookmark2Props> {}
