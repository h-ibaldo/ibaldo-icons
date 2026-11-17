import { SvelteComponent } from 'svelte';

export interface PageViewExtraLargeCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewExtraLargeCompact extends SvelteComponent<PageViewExtraLargeCompactProps> {}
