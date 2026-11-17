import { SvelteComponent } from 'svelte';

export interface BookmarkSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkSearch extends SvelteComponent<BookmarkSearchProps> {}
