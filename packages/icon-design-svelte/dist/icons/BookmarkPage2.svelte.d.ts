import { SvelteComponent } from 'svelte';

export interface BookmarkPage2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkPage2 extends SvelteComponent<BookmarkPage2Props> {}
