import { SvelteComponent } from 'svelte';

export interface BookmarkDotsCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkDotsCircleLarge extends SvelteComponent<BookmarkDotsCircleLargeProps> {}
