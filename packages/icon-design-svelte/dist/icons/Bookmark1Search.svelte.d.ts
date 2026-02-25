import { SvelteComponent } from 'svelte';

export interface Bookmark1SearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Search extends SvelteComponent<Bookmark1SearchProps> {}
