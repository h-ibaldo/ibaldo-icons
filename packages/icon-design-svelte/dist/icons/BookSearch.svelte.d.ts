import { SvelteComponent } from 'svelte';

export interface BookSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookSearch extends SvelteComponent<BookSearchProps> {}
