import { SvelteComponent } from 'svelte';

export interface Bookmarks2MinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmarks2Minus extends SvelteComponent<Bookmarks2MinusProps> {}
