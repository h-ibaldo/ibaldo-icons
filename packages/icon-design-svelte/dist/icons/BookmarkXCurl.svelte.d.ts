import { SvelteComponent } from 'svelte';

export interface BookmarkXCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkXCurl extends SvelteComponent<BookmarkXCurlProps> {}
