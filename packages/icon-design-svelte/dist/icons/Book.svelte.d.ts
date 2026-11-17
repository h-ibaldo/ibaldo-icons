import { SvelteComponent } from 'svelte';

export interface BookProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Book extends SvelteComponent<BookProps> {}
