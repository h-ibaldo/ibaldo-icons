import { SvelteComponent } from 'svelte';

export interface Bookmark2OneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark2One extends SvelteComponent<Bookmark2OneProps> {}
