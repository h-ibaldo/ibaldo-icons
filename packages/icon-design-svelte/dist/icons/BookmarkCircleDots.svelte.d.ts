import { SvelteComponent } from 'svelte';

export interface BookmarkCircleDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCircleDots extends SvelteComponent<BookmarkCircleDotsProps> {}
