import { SvelteComponent } from 'svelte';

export interface BookmarkPlusCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkPlusCircleLarge extends SvelteComponent<BookmarkPlusCircleLargeProps> {}
