import { SvelteComponent } from 'svelte';

export interface BookmarkOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkOff extends SvelteComponent<BookmarkOffProps> {}
