import { SvelteComponent } from 'svelte';

export interface BookmarkStar2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStar2 extends SvelteComponent<BookmarkStar2Props> {}
