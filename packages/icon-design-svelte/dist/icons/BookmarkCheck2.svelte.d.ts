import { SvelteComponent } from 'svelte';

export interface BookmarkCheck2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCheck2 extends SvelteComponent<BookmarkCheck2Props> {}
