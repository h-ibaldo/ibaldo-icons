import { SvelteComponent } from 'svelte';

export interface BookmarkXRolledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkXRolled extends SvelteComponent<BookmarkXRolledProps> {}
