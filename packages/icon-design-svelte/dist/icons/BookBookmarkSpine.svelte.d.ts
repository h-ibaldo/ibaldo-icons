import { SvelteComponent } from 'svelte';

export interface BookBookmarkSpineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmarkSpine extends SvelteComponent<BookBookmarkSpineProps> {}
