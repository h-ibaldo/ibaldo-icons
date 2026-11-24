import { SvelteComponent } from 'svelte';

export interface BookStackOverlapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookStackOverlap extends SvelteComponent<BookStackOverlapProps> {}
