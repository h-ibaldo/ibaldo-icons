import { SvelteComponent } from 'svelte';

export interface Bookmark3OneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark3One extends SvelteComponent<Bookmark3OneProps> {}
