import { SvelteComponent } from 'svelte';

export interface BookmarkPlusCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkPlusCorner extends SvelteComponent<BookmarkPlusCornerProps> {}
