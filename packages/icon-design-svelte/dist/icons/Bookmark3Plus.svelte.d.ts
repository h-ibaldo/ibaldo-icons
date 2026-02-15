import { SvelteComponent } from 'svelte';

export interface Bookmark3PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark3Plus extends SvelteComponent<Bookmark3PlusProps> {}
