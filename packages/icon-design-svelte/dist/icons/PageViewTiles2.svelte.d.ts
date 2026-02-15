import { SvelteComponent } from 'svelte';

export interface PageViewTiles2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewTiles2 extends SvelteComponent<PageViewTiles2Props> {}
