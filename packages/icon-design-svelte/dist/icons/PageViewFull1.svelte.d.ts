import { SvelteComponent } from 'svelte';

export interface PageViewFull1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewFull1 extends SvelteComponent<PageViewFull1Props> {}
