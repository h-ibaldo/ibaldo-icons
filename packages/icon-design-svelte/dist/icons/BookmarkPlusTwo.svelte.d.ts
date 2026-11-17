import { SvelteComponent } from 'svelte';

export interface BookmarkPlusTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkPlusTwo extends SvelteComponent<BookmarkPlusTwoProps> {}
