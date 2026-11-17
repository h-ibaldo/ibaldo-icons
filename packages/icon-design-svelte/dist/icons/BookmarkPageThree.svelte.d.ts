import { SvelteComponent } from 'svelte';

export interface BookmarkPageThreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkPageThree extends SvelteComponent<BookmarkPageThreeProps> {}
