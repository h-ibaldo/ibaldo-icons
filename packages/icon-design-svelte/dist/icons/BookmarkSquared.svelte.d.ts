import { SvelteComponent } from 'svelte';

export interface BookmarkSquaredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkSquared extends SvelteComponent<BookmarkSquaredProps> {}
