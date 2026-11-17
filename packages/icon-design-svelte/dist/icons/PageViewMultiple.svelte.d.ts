import { SvelteComponent } from 'svelte';

export interface PageViewMultipleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewMultiple extends SvelteComponent<PageViewMultipleProps> {}
