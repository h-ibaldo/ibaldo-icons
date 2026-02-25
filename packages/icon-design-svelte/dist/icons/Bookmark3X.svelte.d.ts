import { SvelteComponent } from 'svelte';

export interface Bookmark3XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark3X extends SvelteComponent<Bookmark3XProps> {}
