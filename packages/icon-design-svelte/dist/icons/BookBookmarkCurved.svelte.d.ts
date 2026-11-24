import { SvelteComponent } from 'svelte';

export interface BookBookmarkCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmarkCurved extends SvelteComponent<BookBookmarkCurvedProps> {}
