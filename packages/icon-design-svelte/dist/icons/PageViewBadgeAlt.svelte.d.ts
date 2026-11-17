import { SvelteComponent } from 'svelte';

export interface PageViewBadgeAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewBadgeAlt extends SvelteComponent<PageViewBadgeAltProps> {}
