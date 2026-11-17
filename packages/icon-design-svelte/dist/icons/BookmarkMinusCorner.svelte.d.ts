import { SvelteComponent } from 'svelte';

export interface BookmarkMinusCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkMinusCorner extends SvelteComponent<BookmarkMinusCornerProps> {}
