import { SvelteComponent } from 'svelte';

export interface Bookmarks1PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmarks1Plus extends SvelteComponent<Bookmarks1PlusProps> {}
