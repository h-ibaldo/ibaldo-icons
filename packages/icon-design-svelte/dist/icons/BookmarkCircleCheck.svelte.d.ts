import { SvelteComponent } from 'svelte';

export interface BookmarkCircleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCircleCheck extends SvelteComponent<BookmarkCircleCheckProps> {}
