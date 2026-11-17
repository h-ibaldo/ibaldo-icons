import { SvelteComponent } from 'svelte';

export interface BookmarkStarRolledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStarRolled extends SvelteComponent<BookmarkStarRolledProps> {}
