import { SvelteComponent } from 'svelte';

export interface BookmarkCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCurl extends SvelteComponent<BookmarkCurlProps> {}
