import { SvelteComponent } from 'svelte';

export interface PageViewSingleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewSingle extends SvelteComponent<PageViewSingleProps> {}
