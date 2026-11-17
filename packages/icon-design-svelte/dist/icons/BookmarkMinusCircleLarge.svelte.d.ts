import { SvelteComponent } from 'svelte';

export interface BookmarkMinusCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkMinusCircleLarge extends SvelteComponent<BookmarkMinusCircleLargeProps> {}
