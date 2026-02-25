import { SvelteComponent } from 'svelte';

export interface PageViewFull2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewFull2 extends SvelteComponent<PageViewFull2Props> {}
