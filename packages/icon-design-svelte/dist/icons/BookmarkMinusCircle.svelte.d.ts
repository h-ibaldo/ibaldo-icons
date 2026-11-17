import { SvelteComponent } from 'svelte';

export interface BookmarkMinusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkMinusCircle extends SvelteComponent<BookmarkMinusCircleProps> {}
