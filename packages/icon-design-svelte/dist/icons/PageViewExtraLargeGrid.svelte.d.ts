import { SvelteComponent } from 'svelte';

export interface PageViewExtraLargeGridProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewExtraLargeGrid extends SvelteComponent<PageViewExtraLargeGridProps> {}
