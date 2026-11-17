import { SvelteComponent } from 'svelte';

export interface BookmarkThreeRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkThreeRound extends SvelteComponent<BookmarkThreeRoundProps> {}
