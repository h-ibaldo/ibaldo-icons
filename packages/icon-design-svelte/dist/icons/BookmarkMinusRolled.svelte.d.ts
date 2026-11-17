import { SvelteComponent } from 'svelte';

export interface BookmarkMinusRolledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkMinusRolled extends SvelteComponent<BookmarkMinusRolledProps> {}
