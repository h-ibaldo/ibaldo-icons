import { SvelteComponent } from 'svelte';

export interface BookmarkPlusRolledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkPlusRolled extends SvelteComponent<BookmarkPlusRolledProps> {}
