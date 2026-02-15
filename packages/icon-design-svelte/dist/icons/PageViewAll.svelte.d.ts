import { SvelteComponent } from 'svelte';

export interface PageViewAllProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewAll extends SvelteComponent<PageViewAllProps> {}
