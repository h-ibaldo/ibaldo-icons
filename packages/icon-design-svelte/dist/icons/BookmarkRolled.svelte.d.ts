import { SvelteComponent } from 'svelte';

export interface BookmarkRolledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkRolled extends SvelteComponent<BookmarkRolledProps> {}
