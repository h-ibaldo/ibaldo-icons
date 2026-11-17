import { SvelteComponent } from 'svelte';

export interface BookmarkStackCheckEdgeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStackCheckEdge extends SvelteComponent<BookmarkStackCheckEdgeProps> {}
