import { SvelteComponent } from 'svelte';

export interface BookBlockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookBlock extends SvelteComponent<BookBlockProps> {}
