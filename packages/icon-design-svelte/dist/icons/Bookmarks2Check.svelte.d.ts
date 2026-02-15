import { SvelteComponent } from 'svelte';

export interface Bookmarks2CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmarks2Check extends SvelteComponent<Bookmarks2CheckProps> {}
