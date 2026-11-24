import { SvelteComponent } from 'svelte';

export interface BookmarkPlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkPlusCircle extends SvelteComponent<BookmarkPlusCircleProps> {}
