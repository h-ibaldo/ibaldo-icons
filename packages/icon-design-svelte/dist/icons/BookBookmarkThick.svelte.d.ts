import { SvelteComponent } from 'svelte';

export interface BookBookmarkThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmarkThick extends SvelteComponent<BookBookmarkThickProps> {}
