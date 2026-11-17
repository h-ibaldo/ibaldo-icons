import { SvelteComponent } from 'svelte';

export interface BookmarkStar4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStar4 extends SvelteComponent<BookmarkStar4Props> {}
