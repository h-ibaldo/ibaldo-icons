import { SvelteComponent } from 'svelte';

export interface BookmarkCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkCircle extends SvelteComponent<BookmarkCircleProps> {}
