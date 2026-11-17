import { SvelteComponent } from 'svelte';

export interface BookmarkCircleLargeAddProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCircleLargeAdd extends SvelteComponent<BookmarkCircleLargeAddProps> {}
