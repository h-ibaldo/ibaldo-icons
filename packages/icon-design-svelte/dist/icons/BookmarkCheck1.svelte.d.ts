import { SvelteComponent } from 'svelte';

export interface BookmarkCheck1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCheck1 extends SvelteComponent<BookmarkCheck1Props> {}
