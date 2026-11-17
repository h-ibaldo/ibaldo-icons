import { SvelteComponent } from 'svelte';

export interface BookmarkThreeCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkThreeCurl extends SvelteComponent<BookmarkThreeCurlProps> {}
