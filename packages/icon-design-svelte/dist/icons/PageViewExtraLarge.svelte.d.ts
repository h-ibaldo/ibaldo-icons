import { SvelteComponent } from 'svelte';

export interface PageViewExtraLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewExtraLarge extends SvelteComponent<PageViewExtraLargeProps> {}
