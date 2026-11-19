import { SvelteComponent } from 'svelte';

export interface BookCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookCurved extends SvelteComponent<BookCurvedProps> {}
