import { SvelteComponent } from 'svelte';

export interface BookBookmarkPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmarkPlain extends SvelteComponent<BookBookmarkPlainProps> {}
