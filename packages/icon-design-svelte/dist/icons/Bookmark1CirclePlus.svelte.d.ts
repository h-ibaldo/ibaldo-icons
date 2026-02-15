import { SvelteComponent } from 'svelte';

export interface Bookmark1CirclePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1CirclePlus extends SvelteComponent<Bookmark1CirclePlusProps> {}
