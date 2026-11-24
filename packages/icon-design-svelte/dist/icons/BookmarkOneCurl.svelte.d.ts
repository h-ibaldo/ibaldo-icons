import { SvelteComponent } from 'svelte';

export interface BookmarkOneCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkOneCurl extends SvelteComponent<BookmarkOneCurlProps> {}
