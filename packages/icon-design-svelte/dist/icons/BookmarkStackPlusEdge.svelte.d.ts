import { SvelteComponent } from 'svelte';

export interface BookmarkStackPlusEdgeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStackPlusEdge extends SvelteComponent<BookmarkStackPlusEdgeProps> {}
