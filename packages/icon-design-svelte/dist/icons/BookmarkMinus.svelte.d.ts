import { SvelteComponent } from 'svelte';

export interface BookmarkMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkMinus extends SvelteComponent<BookmarkMinusProps> {}
