import { SvelteComponent } from 'svelte';

export interface BookmarkCheckCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCheckCorner extends SvelteComponent<BookmarkCheckCornerProps> {}
