import { SvelteComponent } from 'svelte';

export interface Bookmark1CircleLargeCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1CircleLargeCheck extends SvelteComponent<Bookmark1CircleLargeCheckProps> {}
