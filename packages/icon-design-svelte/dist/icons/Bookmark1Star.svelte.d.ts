import { SvelteComponent } from 'svelte';

export interface Bookmark1StarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Star extends SvelteComponent<Bookmark1StarProps> {}
