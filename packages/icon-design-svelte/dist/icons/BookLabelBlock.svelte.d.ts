import { SvelteComponent } from 'svelte';

export interface BookLabelBlockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookLabelBlock extends SvelteComponent<BookLabelBlockProps> {}
