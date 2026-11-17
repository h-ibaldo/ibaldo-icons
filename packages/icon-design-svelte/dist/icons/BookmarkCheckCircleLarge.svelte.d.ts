import { SvelteComponent } from 'svelte';

export interface BookmarkCheckCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCheckCircleLarge extends SvelteComponent<BookmarkCheckCircleLargeProps> {}
