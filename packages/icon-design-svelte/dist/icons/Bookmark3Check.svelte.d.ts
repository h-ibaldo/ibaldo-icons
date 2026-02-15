import { SvelteComponent } from 'svelte';

export interface Bookmark3CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark3Check extends SvelteComponent<Bookmark3CheckProps> {}
