import { SvelteComponent } from 'svelte';

export interface PageViewListThumbnailsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewListThumbnails extends SvelteComponent<PageViewListThumbnailsProps> {}
