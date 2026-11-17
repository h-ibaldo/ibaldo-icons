import { SvelteComponent } from 'svelte';

export interface BookmarkCircleLargeCloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCircleLargeClose extends SvelteComponent<BookmarkCircleLargeCloseProps> {}
