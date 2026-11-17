import { SvelteComponent } from 'svelte';

export interface Bookmark2CloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark2Close extends SvelteComponent<Bookmark2CloseProps> {}
