import { SvelteComponent } from 'svelte';

export interface Bookmarks1CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmarks1Check extends SvelteComponent<Bookmarks1CheckProps> {}
