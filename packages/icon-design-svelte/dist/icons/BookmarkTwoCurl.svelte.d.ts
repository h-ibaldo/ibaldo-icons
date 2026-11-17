import { SvelteComponent } from 'svelte';

export interface BookmarkTwoCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkTwoCurl extends SvelteComponent<BookmarkTwoCurlProps> {}
