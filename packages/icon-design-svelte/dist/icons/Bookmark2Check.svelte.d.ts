import { SvelteComponent } from 'svelte';

export interface Bookmark2CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark2Check extends SvelteComponent<Bookmark2CheckProps> {}
