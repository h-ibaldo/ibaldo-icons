import { SvelteComponent } from 'svelte';

export interface BookshelfDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookshelfDouble extends SvelteComponent<BookshelfDoubleProps> {}
