import { SvelteComponent } from 'svelte';

export interface PageViewOverlappingWindowsStaticViewsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewOverlappingWindowsStaticViews extends SvelteComponent<PageViewOverlappingWindowsStaticViewsProps> {}
