import { SvelteComponent } from 'svelte';

export interface BookmarkMinusCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkMinusCurl extends SvelteComponent<BookmarkMinusCurlProps> {}
