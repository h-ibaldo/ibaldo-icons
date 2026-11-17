import { SvelteComponent } from 'svelte';

export interface BookmarkNumberOneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkNumberOne extends SvelteComponent<BookmarkNumberOneProps> {}
