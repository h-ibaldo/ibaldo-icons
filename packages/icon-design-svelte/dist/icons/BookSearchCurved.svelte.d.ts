import { SvelteComponent } from 'svelte';

export interface BookSearchCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookSearchCurved extends SvelteComponent<BookSearchCurvedProps> {}
