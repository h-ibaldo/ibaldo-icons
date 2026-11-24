import { SvelteComponent } from 'svelte';

export interface BookmarkTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkTwo extends SvelteComponent<BookmarkTwoProps> {}
