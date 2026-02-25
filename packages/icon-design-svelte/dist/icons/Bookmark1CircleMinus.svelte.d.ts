import { SvelteComponent } from 'svelte';

export interface Bookmark1CircleMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1CircleMinus extends SvelteComponent<Bookmark1CircleMinusProps> {}
