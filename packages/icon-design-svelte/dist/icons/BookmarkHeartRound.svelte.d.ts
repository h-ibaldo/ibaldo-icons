import { SvelteComponent } from 'svelte';

export interface BookmarkHeartRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkHeartRound extends SvelteComponent<BookmarkHeartRoundProps> {}
