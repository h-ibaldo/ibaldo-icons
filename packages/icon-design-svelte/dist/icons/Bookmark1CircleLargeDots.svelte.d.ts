import { SvelteComponent } from 'svelte';

export interface Bookmark1CircleLargeDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1CircleLargeDots extends SvelteComponent<Bookmark1CircleLargeDotsProps> {}
