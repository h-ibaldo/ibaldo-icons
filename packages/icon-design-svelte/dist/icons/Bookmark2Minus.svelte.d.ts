import { SvelteComponent } from 'svelte';

export interface Bookmark2MinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark2Minus extends SvelteComponent<Bookmark2MinusProps> {}
