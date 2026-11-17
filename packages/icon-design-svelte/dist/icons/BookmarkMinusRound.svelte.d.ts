import { SvelteComponent } from 'svelte';

export interface BookmarkMinusRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkMinusRound extends SvelteComponent<BookmarkMinusRoundProps> {}
