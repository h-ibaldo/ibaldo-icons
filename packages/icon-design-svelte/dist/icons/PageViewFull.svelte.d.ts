import { SvelteComponent } from 'svelte';

export interface PageViewFullProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewFull extends SvelteComponent<PageViewFullProps> {}
