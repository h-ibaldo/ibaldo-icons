import { SvelteComponent } from 'svelte';

export interface BookmarkSlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkSlash extends SvelteComponent<BookmarkSlashProps> {}
