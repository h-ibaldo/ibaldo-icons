import { SvelteComponent } from 'svelte';

export interface BookmarkCircleCloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCircleClose extends SvelteComponent<BookmarkCircleCloseProps> {}
