import { SvelteComponent } from 'svelte';

export interface BookmarkOffCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkOffCurl extends SvelteComponent<BookmarkOffCurlProps> {}
