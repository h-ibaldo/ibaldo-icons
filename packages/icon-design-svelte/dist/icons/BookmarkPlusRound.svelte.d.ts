import { SvelteComponent } from 'svelte';

export interface BookmarkPlusRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkPlusRound extends SvelteComponent<BookmarkPlusRoundProps> {}
