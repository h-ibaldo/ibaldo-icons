import { SvelteComponent } from 'svelte';

export interface BookmarkStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStriped extends SvelteComponent<BookmarkStripedProps> {}
