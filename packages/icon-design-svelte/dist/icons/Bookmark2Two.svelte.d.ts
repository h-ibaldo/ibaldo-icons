import { SvelteComponent } from 'svelte';

export interface Bookmark2TwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark2Two extends SvelteComponent<Bookmark2TwoProps> {}
