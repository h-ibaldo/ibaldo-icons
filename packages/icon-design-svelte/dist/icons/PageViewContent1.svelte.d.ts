import { SvelteComponent } from 'svelte';

export interface PageViewContent1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewContent1 extends SvelteComponent<PageViewContent1Props> {}
