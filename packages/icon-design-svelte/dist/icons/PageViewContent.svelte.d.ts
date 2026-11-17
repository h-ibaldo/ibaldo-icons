import { SvelteComponent } from 'svelte';

export interface PageViewContentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewContent extends SvelteComponent<PageViewContentProps> {}
