import { SvelteComponent } from 'svelte';

export interface Bookmark2PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark2Plus extends SvelteComponent<Bookmark2PlusProps> {}
