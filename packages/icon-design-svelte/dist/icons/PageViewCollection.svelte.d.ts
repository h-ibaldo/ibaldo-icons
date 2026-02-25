import { SvelteComponent } from 'svelte';

export interface PageViewCollectionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewCollection extends SvelteComponent<PageViewCollectionProps> {}
