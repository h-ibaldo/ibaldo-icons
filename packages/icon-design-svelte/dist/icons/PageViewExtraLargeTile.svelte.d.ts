import { SvelteComponent } from 'svelte';

export interface PageViewExtraLargeTileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PageViewExtraLargeTile extends SvelteComponent<PageViewExtraLargeTileProps> {}
