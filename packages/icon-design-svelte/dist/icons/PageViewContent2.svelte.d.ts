import { SvelteComponent } from 'svelte';

export interface PageViewContent2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewContent2 extends SvelteComponent<PageViewContent2Props> {}
