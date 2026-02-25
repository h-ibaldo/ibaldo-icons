import { SvelteComponent } from 'svelte';

export interface Bookmarks2PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmarks2Plus extends SvelteComponent<Bookmarks2PlusProps> {}
