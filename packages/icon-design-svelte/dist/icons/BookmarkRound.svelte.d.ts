import { SvelteComponent } from 'svelte';

export interface BookmarkRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkRound extends SvelteComponent<BookmarkRoundProps> {}
