import { SvelteComponent } from 'svelte';

export interface Bookmark1DotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Dots extends SvelteComponent<Bookmark1DotsProps> {}
