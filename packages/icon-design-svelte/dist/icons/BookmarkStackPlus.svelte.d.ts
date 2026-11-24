import { SvelteComponent } from 'svelte';

export interface BookmarkStackPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStackPlus extends SvelteComponent<BookmarkStackPlusProps> {}
