import { SvelteComponent } from 'svelte';

export interface BookTextRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookTextRound extends SvelteComponent<BookTextRoundProps> {}
