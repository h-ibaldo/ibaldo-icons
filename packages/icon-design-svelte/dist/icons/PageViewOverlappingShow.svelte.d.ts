import { SvelteComponent } from 'svelte';

export interface PageViewOverlappingShowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewOverlappingShow extends SvelteComponent<PageViewOverlappingShowProps> {}
