import { SvelteComponent } from 'svelte';

export interface BookInfoThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookInfoThick extends SvelteComponent<BookInfoThickProps> {}
