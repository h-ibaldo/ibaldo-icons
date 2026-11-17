import { SvelteComponent } from 'svelte';

export interface BookmarkStarRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStarRound extends SvelteComponent<BookmarkStarRoundProps> {}
