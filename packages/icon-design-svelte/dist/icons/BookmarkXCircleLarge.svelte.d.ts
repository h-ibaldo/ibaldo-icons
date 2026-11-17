import { SvelteComponent } from 'svelte';

export interface BookmarkXCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkXCircleLarge extends SvelteComponent<BookmarkXCircleLargeProps> {}
