import { SvelteComponent } from 'svelte';

export interface BookmarkStackEdgeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStackEdge extends SvelteComponent<BookmarkStackEdgeProps> {}
