import { SvelteComponent } from 'svelte';

export interface BookmarkThreeCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkThreeCorner extends SvelteComponent<BookmarkThreeCornerProps> {}
