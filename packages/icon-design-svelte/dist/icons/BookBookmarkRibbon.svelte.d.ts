import { SvelteComponent } from 'svelte';

export interface BookBookmarkRibbonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmarkRibbon extends SvelteComponent<BookBookmarkRibbonProps> {}
