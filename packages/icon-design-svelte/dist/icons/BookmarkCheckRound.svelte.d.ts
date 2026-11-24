import { SvelteComponent } from 'svelte';

export interface BookmarkCheckRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCheckRound extends SvelteComponent<BookmarkCheckRoundProps> {}
