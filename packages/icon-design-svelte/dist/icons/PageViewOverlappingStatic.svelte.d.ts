import { SvelteComponent } from 'svelte';

export interface PageViewOverlappingStaticProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewOverlappingStatic extends SvelteComponent<PageViewOverlappingStaticProps> {}
