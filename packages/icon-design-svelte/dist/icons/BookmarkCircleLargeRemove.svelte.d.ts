import { SvelteComponent } from 'svelte';

export interface BookmarkCircleLargeRemoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCircleLargeRemove extends SvelteComponent<BookmarkCircleLargeRemoveProps> {}
