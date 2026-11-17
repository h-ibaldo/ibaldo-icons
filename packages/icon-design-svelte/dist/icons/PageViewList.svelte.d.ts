import { SvelteComponent } from 'svelte';

export interface PageViewListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewList extends SvelteComponent<PageViewListProps> {}
