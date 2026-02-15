import { SvelteComponent } from 'svelte';

export interface PageViewMultiplePagesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewMultiplePages extends SvelteComponent<PageViewMultiplePagesProps> {}
