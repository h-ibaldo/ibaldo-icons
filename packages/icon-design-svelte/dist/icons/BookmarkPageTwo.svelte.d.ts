import { SvelteComponent } from 'svelte';

export interface BookmarkPageTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkPageTwo extends SvelteComponent<BookmarkPageTwoProps> {}
