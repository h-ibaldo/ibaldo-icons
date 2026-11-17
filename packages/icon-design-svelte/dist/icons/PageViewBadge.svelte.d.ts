import { SvelteComponent } from 'svelte';

export interface PageViewBadgeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewBadge extends SvelteComponent<PageViewBadgeProps> {}
