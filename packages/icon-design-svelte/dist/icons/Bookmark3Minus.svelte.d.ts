import { SvelteComponent } from 'svelte';

export interface Bookmark3MinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark3Minus extends SvelteComponent<Bookmark3MinusProps> {}
