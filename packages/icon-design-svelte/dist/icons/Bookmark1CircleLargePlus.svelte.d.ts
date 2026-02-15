import { SvelteComponent } from 'svelte';

export interface Bookmark1CircleLargePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1CircleLargePlus extends SvelteComponent<Bookmark1CircleLargePlusProps> {}
