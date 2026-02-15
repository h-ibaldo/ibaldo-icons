import { SvelteComponent } from 'svelte';

export interface PageViewListDetailsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewListDetails extends SvelteComponent<PageViewListDetailsProps> {}
