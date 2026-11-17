import { SvelteComponent } from 'svelte';

export interface BookmarkThree3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkThree3 extends SvelteComponent<BookmarkThree3Props> {}
