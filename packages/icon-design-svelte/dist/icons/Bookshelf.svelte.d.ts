import { SvelteComponent } from 'svelte';

export interface BookshelfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookshelf extends SvelteComponent<BookshelfProps> {}
