import { SvelteComponent } from 'svelte';

export interface BookmarkLargeDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkLargeDots extends SvelteComponent<BookmarkLargeDotsProps> {}
