import { SvelteComponent } from 'svelte';

export interface BookmarkXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkXCircle extends SvelteComponent<BookmarkXCircleProps> {}
