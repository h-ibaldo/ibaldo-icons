import { SvelteComponent } from 'svelte';

export interface BookBookmarkUnderlineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmarkUnderline extends SvelteComponent<BookBookmarkUnderlineProps> {}
