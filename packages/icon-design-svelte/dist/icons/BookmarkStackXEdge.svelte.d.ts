import { SvelteComponent } from 'svelte';

export interface BookmarkStackXEdgeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStackXEdge extends SvelteComponent<BookmarkStackXEdgeProps> {}
