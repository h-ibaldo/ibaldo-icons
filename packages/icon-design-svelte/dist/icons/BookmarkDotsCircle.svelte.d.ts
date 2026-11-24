import { SvelteComponent } from 'svelte';

export interface BookmarkDotsCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkDotsCircle extends SvelteComponent<BookmarkDotsCircleProps> {}
