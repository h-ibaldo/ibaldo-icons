import { SvelteComponent } from 'svelte';

export interface BookmarkXRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkXRound extends SvelteComponent<BookmarkXRoundProps> {}
