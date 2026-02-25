import { SvelteComponent } from 'svelte';

export interface PageViewTiles1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewTiles1 extends SvelteComponent<PageViewTiles1Props> {}
