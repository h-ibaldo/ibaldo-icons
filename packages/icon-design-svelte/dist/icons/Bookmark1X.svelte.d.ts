import { SvelteComponent } from 'svelte';

export interface Bookmark1XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1X extends SvelteComponent<Bookmark1XProps> {}
