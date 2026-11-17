import { SvelteComponent } from 'svelte';

export interface BookmarkOneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkOne extends SvelteComponent<BookmarkOneProps> {}
