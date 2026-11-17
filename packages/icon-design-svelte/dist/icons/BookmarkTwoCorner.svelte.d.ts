import { SvelteComponent } from 'svelte';

export interface BookmarkTwoCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkTwoCorner extends SvelteComponent<BookmarkTwoCornerProps> {}
