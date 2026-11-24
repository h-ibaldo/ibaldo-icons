import { SvelteComponent } from 'svelte';

export interface BookOpenRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenRound extends SvelteComponent<BookOpenRoundProps> {}
