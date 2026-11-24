import { SvelteComponent } from 'svelte';

export interface BookmarkStackMinusEdgeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStackMinusEdge extends SvelteComponent<BookmarkStackMinusEdgeProps> {}
