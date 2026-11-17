import { SvelteComponent } from 'svelte';

export interface BookBookmarkRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmarkRounded extends SvelteComponent<BookBookmarkRoundedProps> {}
