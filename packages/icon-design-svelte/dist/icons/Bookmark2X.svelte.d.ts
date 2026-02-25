import { SvelteComponent } from 'svelte';

export interface Bookmark2XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark2X extends SvelteComponent<Bookmark2XProps> {}
