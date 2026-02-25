import { SvelteComponent } from 'svelte';

export interface PageViewContentListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewContentList extends SvelteComponent<PageViewContentListProps> {}
