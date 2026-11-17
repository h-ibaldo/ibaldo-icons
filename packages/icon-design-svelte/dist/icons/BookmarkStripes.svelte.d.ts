import { SvelteComponent } from 'svelte';

export interface BookmarkStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStripes extends SvelteComponent<BookmarkStripesProps> {}
