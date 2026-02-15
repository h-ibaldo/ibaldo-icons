import { SvelteComponent } from 'svelte';

export interface BookmarksCollectionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarksCollection extends SvelteComponent<BookmarksCollectionProps> {}
