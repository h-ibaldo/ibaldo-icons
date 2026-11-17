import { SvelteComponent } from 'svelte';

export interface BookmarkOne2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkOne2 extends SvelteComponent<BookmarkOne2Props> {}
