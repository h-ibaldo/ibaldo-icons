import { SvelteComponent } from 'svelte';

export interface BookmarkTwoStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkTwoStripes extends SvelteComponent<BookmarkTwoStripesProps> {}
