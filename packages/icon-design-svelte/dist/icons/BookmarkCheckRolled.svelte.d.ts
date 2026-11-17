import { SvelteComponent } from 'svelte';

export interface BookmarkCheckRolledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCheckRolled extends SvelteComponent<BookmarkCheckRolledProps> {}
