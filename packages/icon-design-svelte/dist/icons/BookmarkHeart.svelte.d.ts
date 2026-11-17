import { SvelteComponent } from 'svelte';

export interface BookmarkHeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkHeart extends SvelteComponent<BookmarkHeartProps> {}
