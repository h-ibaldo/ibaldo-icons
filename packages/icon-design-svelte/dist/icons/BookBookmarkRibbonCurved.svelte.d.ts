import { SvelteComponent } from 'svelte';

export interface BookBookmarkRibbonCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBookmarkRibbonCurved extends SvelteComponent<BookBookmarkRibbonCurvedProps> {}
