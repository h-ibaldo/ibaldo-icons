import { SvelteComponent } from 'svelte';

export interface Bookmark1RemoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Remove extends SvelteComponent<Bookmark1RemoveProps> {}
