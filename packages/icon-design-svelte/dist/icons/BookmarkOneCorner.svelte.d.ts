import { SvelteComponent } from 'svelte';

export interface BookmarkOneCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkOneCorner extends SvelteComponent<BookmarkOneCornerProps> {}
