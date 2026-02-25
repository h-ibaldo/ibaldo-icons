import { SvelteComponent } from 'svelte';

export interface Bookmark1OneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1One extends SvelteComponent<Bookmark1OneProps> {}
